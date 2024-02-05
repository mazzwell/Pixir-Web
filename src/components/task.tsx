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
    await wait(7000);
    setIsFollowed(true);
    setFollowLoading(false);
  };

  const handleRetweet = async () => {
    setRetweetLoading(true);
    await wait(7000);
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
        <> <p>Complete task to mint NFT</p>
          <p>
            <button style={buttonStylesFollow} disabled={followLoading} onClick={handleFollow}>
              {followLoading ? "Loading" : isFollowed ? "Followed" : "Follow ..."}
            </button>
          </p>
          <p>
            <button style={buttonStylesRetweet} disabled={retweetLoading} onClick={handleRetweet}>
              {retweetLoading ? "Loading" : isRetweeted ? "Retweeted" : "Retweet"}
            </button>
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
