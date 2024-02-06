import { useState, useEffect } from "react";
import { Web3Button } from "@thirdweb-dev/react";

function Task() {
  const [isFollowed, setIsFollowed] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [retweetLoading, setRetweetLoading] = useState(false);
  const [web3ButtonLoading, setWeb3ButtonLoading] = useState(false);
  const [web3ButtonVisible, setWeb3ButtonVisible] = useState(false);

  const commonButtonStyles: React.CSSProperties = {
    color: "#fff",
    backgroundColor: "black",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
    fontWeight: "bold",
    padding: "15px",
    borderRadius: "8px",
    transition: "background-color 0.3s, border-color 0.3s, box-shadow 0.3s"
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

  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <>
      {!web3ButtonVisible && (
  <>
    <p>Complete task to mint NFT</p>
    <p>
      <a href="https://twitter.com/intent/follow?screen_name=pixirweb" target="_blank" rel="noopener noreferrer" style={buttonStylesFollow} onClick={handleFollow}>
        {followLoading ? "Loading" : isFollowed ? "Followed" : "Follow ..."}
      </a>
    </p>
    <p>
      <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftwitter.com%2Fpixirweb%2Fstatus%2F1754823771175764382&text=Free%20Mint%20Your%20Pixir%20NFT%20%7C%20follow%20--%3E%20%20@_morkie%20%26%20@pixirweb&hashtags=freemint%2Cnft" target="_blank" rel="noopener noreferrer" style={buttonStylesRetweet} onClick={handleRetweet}>
        {retweetLoading ? "Loading" : isRetweeted ? "Retweeted" : "Retweet"}
      </a>
    </p>
  </>
)}

      {web3ButtonVisible && (
        <div className="wbutton"> 
          <p> Now Mint Your NFT</p>
          <Web3Button
            style={web}
            contractAddress="0x523B792D14a47cf8dc985bb4562908303FAEe43E"
            onSuccess={(_result) => alert("Success!")}
            onError={(_error) => alert("Not Enough Matic")}
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
