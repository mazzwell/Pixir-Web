import { useState, useEffect } from "react";
import { getDatabase, ref, get, update, set } from "firebase/database";
import { auth } from './firebase';


function Task() {
  const [isFollowed, setIsFollowed] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [retweetLoading, setRetweetLoading] = useState(false);
  const [web3ButtonLoading, setWeb3ButtonLoading] = useState(false);
  const [web3ButtonVisible, setWeb3ButtonVisible] = useState(false);
  const [successStatus, setSuccessStatus] = useState<boolean | null>(null);
  const [points, setPoints] = useState<number>(0);
  const [referralID, setReferralID] = useState<string>(""); 
  const [referralCodeInput, setReferralCodeInput] = useState(""); // State for storing the inputted referral code
  const [evmAddress, setEvmAddress] = useState(""); // For storing user's EVM address input
  const [evmAddressSubmitted, setEvmAddressSubmitted] = useState(false); // To track if the EVM address has been submitted
  const [referralSubmitted, setReferralSubmitted] = useState(false);

  const commonButtonStyles: React.CSSProperties = {
    color: "#fff",
    backgroundColor: "black",
    fontWeight: "bold",
    padding: "15px",
    borderRadius: "8px",
    transition: "background-color 0.3s, border-color 0.3s, box-shadow 0.3s",
  };

  const buttonStylesFollow: React.CSSProperties = {
    ...commonButtonStyles,
    border: isFollowed ? "1px solid #86bf00" : "1px solid #ffffff",
  };

  const buttonStylesRetweet: React.CSSProperties = {
    ...commonButtonStyles,
    border: isRetweeted ? "1px solid #86bf00" : "1px solid #ffffff",
  };

  const web: React.CSSProperties = {
    ...commonButtonStyles,
    border: "1px solid #86bf00",
    padding: "15px",
    transition: "background-color 1s, border-color 0.3s, box-shadow 0.3s",
  };
  

  useEffect(() => {
    // Check user's success status, referral submission, and fetch existing EVM address if available
    const fetchData = async () => {
      if (!auth.currentUser) {
        console.error("No user authenticated.");
        setSuccessStatus(false);
        return;
      }
  
      const dbRef = ref(getDatabase(), `busers/${auth.currentUser.uid}`);
      try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setSuccessStatus(data.successStatus);
          setPoints(data.points || 0);
          setReferralID(data.referralID || "");
          if (data.evmAddress) {
            setEvmAddress(data.evmAddress);
            setEvmAddressSubmitted(true);
          }
          // Update referralSubmitted state based on the database value
          setReferralSubmitted(!!data.referralSubmitted);
        } else {
          setSuccessStatus(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setSuccessStatus(false);
      }
    };
  
    fetchData();
  }, []);
  

  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


  const handleFollow = async () => {
    setFollowLoading(true);
    await wait(12000); 
    setIsFollowed(true);
    setFollowLoading(false);
  };

  const handleRetweet = async () => {
    setRetweetLoading(true);
    await wait(12000);
    setIsRetweeted(true);
    setRetweetLoading(false);
  };

  useEffect(() => {
    if (isFollowed && isRetweeted) {
      setWeb3ButtonLoading(true);
      setTimeout(() => {
        setWeb3ButtonLoading(false);
        setWeb3ButtonVisible(true);
      }, 1000);
    }
  }, [isFollowed, isRetweeted]);

  // Handler for successful NFT claim
  const handleSuccess = async () => {
    if (!auth.currentUser) {
      console.error("No user authenticated. Cannot update success status.");
      return;
    }
    
    const uid = auth.currentUser.uid;
    const referralID = uid.slice(-6); // Get the last 6 digits of the UID
    const dbRef = ref(getDatabase(), `busers/${uid}`);
  
    try {
      // Update success status, points, and referral ID in a single operation
      await set(dbRef, {
        successStatus: true,
        points: 100, // Set default points to 100
        referralID: referralID // Set referral ID based on the last 6 digits of UID
      });
      setSuccessStatus(true);
      console.log("Success status and additional fields updated in database.");
    } catch (error) {
      console.error("Error updating success status and additional fields:", error);
    }
  };

  const handleReferralSubmit = async () => {
    if (!referralCodeInput) {
      alert("Please enter a referral code.");
      return;
    }
  
    // Check if the current user has already submitted a referral code
    const currentUserRef = ref(getDatabase(), `busers/${auth.currentUser?.uid}`);
    const currentUserSnapshot = await get(currentUserRef);
    if (currentUserSnapshot.exists() && currentUserSnapshot.val().referralSubmitted) {
      alert("You have already submitted a referral code.");
      return;
    }
  
    // Fetch all users to find the one with the matching referral ID
    const dbRef = ref(getDatabase(), `busers`);
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        let referrerFound = false;
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          if (childData.referralID === referralCodeInput ) {
            const newPoints = (childData.points || 100) + 10; // Add 10 points to the existing points
            const userRef = ref(getDatabase(), `busers/${childSnapshot.key}`);
            update(userRef, { points: newPoints });
            referrerFound = true;
          }
        });
        if (referrerFound) {
          update(currentUserRef, { referralSubmitted: true });
          setReferralSubmitted(true); // Indicates successful referral submission
          alert("Referral code accepted. Now complete the task");
        } else {
          alert("Invalid referral code.");
        }
      } else {
        alert("No users found.");
      }
    } catch (error) {
      console.error("Error processing referral code:", error);
    }
  };

  const handleEvmAddressSubmit = async () => {
    if (!evmAddress) {
      alert("Please enter an EVM address.");
      return;
    }
    const currentUserRef = ref(getDatabase(), `busers/${auth.currentUser?.uid}`);
    try {
      await update(currentUserRef, { evmAddress: evmAddress });
      setEvmAddressSubmitted(true);
      alert("EVM address submitted successfully.");
    } catch (error) {
      console.error("Error submitting EVM address:", error);
    }
  };

  if (successStatus === null) {
    return <p>Loading...</p>;
  }

  if (successStatus) {
    return (
      <>
      <br></br>
      <br></br>
              <br></br>
        <p>Your Points: &nbsp; {points}</p>
        <p>Your Referral ID: &nbsp; {referralID}</p>
        {!evmAddressSubmitted && (
          <div className="input-wrapper">
            <input
              className="xinput"
              type="text"
              placeholder="Bind EVM wallet address"
              value={evmAddress}
              onChange={(e) => setEvmAddress(e.target.value)} />
            <button className="xbutton" onClick={handleEvmAddressSubmit}>{">"}</button>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {!web3ButtonVisible && (
        <> <br></br>
        {
  !referralSubmitted && (
    <><p>Example: Q6DPE3</p><div className="input-wrapper">
                <input
                  className="xinput"
                  type="text"
                  placeholder="Enter referral code"
                  value={referralCodeInput}
                  onChange={(e) => setReferralCodeInput(e.target.value)} />
                <button className="xbutton" onClick={handleReferralSubmit}>{">"}</button>
              </div></>
  )
}
          {
  referralSubmitted && (
    <>
      <p>Complete task to mint NFT</p>
      
      <p>
        <a href="https://twitter.com/intent/follow?screen_name=pixirweb" target="_blank" rel="noopener noreferrer" onClick={handleFollow} style={buttonStylesFollow}>
          {followLoading ? "Loading" : isFollowed ? "Followed" : "Follow ..."}
        </a>
      </p>
      <p>
        <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftwitter.com%2Fpixirweb%2Fstatus%2F1754823771175764382&text=Join%20The%20Hunt%20" target="_blank" rel="noopener noreferrer" style={buttonStylesRetweet} onClick={handleRetweet}>
          {retweetLoading ? "Loading" : isRetweeted ? "Retweeted" : "Retweet"}
        </a>
      </p>
    </>
  )
}
        </>
      )}
      {web3ButtonVisible && (
        <div>
          <p>Now Mint Your NFT</p>
          <a href="https://morkie.xyz/pixir"
          target="_blank" rel="noopener noreferrer"
            style={web}
            onClick={handleSuccess}
          >
            {web3ButtonLoading ? "Loading..." : "Claim NFT"}
          </a>
        </div>
      )}
    </>
  );
}

export default Task;