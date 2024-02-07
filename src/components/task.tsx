import { useState, useEffect } from "react";
import { Web3Button } from "@thirdweb-dev/react";
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
    // Check user's success status and fetch existing EVM address if available
    const checkSuccessStatus = async () => {
      if (!auth.currentUser) {
        console.error("No user authenticated.");
        setSuccessStatus(false);
        return;
      }

      const dbRef = ref(getDatabase(), `users/${auth.currentUser.uid}`);
      try {
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setSuccessStatus(data.successStatus);
          setPoints(data.points || 0);
          setReferralID(data.referralID || "");
          if (data.evmAddress) {
            setEvmAddress(data.evmAddress);
            setEvmAddressSubmitted(true); // Hide EVM address input if already submitted
          }
        } else {
          setSuccessStatus(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setSuccessStatus(false);
      }
    };

    checkSuccessStatus();
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
    const dbRef = ref(getDatabase(), `users/${uid}`);
  
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
    const currentUserRef = ref(getDatabase(), `users/${auth.currentUser?.uid}`);
    const currentUserSnapshot = await get(currentUserRef);
    if (currentUserSnapshot.exists() && currentUserSnapshot.val().referralSubmitted) {
      alert("You have already submitted a referral code.");
      return;
    }
  
    // Fetch all users to find the one with the matching referral ID
    const dbRef = ref(getDatabase(), `users`);
    try {
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        let referrerFound = false;
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          if (childData.referralID === referralCodeInput) {
            // Referrer found, update their points
            const newPoints = (childData.points || 100) + 10; // Add 10 points to the existing points
            const userRef = ref(getDatabase(), `users/${childSnapshot.key}`);
            update(userRef, { points: newPoints });
            referrerFound = true;
          }
        });
        if (referrerFound) {
          // Mark referralSubmitted as true for the current user to prevent multiple submissions
          update(currentUserRef, { referralSubmitted: true });
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
    const currentUserRef = ref(getDatabase(), `users/${auth.currentUser?.uid}`);
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
        <p>Your Points: &nbsp; {points}</p>
        <p>Your Referral ID: &nbsp; {referralID}</p>
        {!evmAddressSubmitted && (
          <div className="input-wrapper" >
            <input 
            className="xinput"
              type="text" 
              placeholder="Bind EVM wallet address" 
              value={evmAddress} 
              onChange={(e) => setEvmAddress(e.target.value)}
            />
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

<div className="input-wrapper">
            <input 
              className="xinput"
              type="text" 
              placeholder="Enter referral code" 
              value={referralCodeInput} 
              onChange={(e) => setReferralCodeInput(e.target.value)} 
            />
            <button className="xbutton" onClick={handleReferralSubmit}>{">"}</button>
          </div>
          <p>Complete task to mint NFT</p>
          
          <p>
            <a href="#" target="_blank" rel="noopener noreferrer" onClick={handleFollow} style={buttonStylesFollow} >
              {followLoading ? "Loading" : isFollowed ? "Followed" : "Follow ..."}
            </a>
          </p>
          <p>
            <a href="#" target="_blank" rel="noopener noreferrer" style={buttonStylesRetweet} onClick={handleRetweet}>
              {retweetLoading ? "Loading" : isRetweeted ? "Retweeted" : "Retweet"}
            </a>
          </p>
        </>
      )}
      {web3ButtonVisible && (
        <div>
          <p>Now Mint Your NFT</p>
          <Web3Button
            style={web}
            contractAddress="0x8b2eb805A9066301959ecD7CfbD31b3F49d360cC"
            onSuccess={handleSuccess}
            onError={(error) => console.error("Minting error:", error)}
            action={async (contract) => {
              await contract.erc721.claim(1);
            }}
          >
            {web3ButtonLoading ? "Loading..." : "Claim NFT"}
          </Web3Button>
        </div>
      )}
    </>
  );
}

export default Task;