import{ useEffect } from 'react';
import Typed from 'typed.js';
import viteLogo from '/xxs.png';
import './App.css';
import { Web3Button } from "@thirdweb-dev/react";

function Home() {
  const myStyles: React.CSSProperties = {
    color: "#fff",
    backgroundColor: "black",
    border: "1px solid #86bf00",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
    fontWeight: "bold",
  };
  useEffect(() => {
    const targetElement = document.getElementById('typed-text');

    const options = {
      strings: ['Hello Citizen', 'Join the world of fun'],
      typeSpeed: 200,
      backSpeed: 100, 
      loop: false,
    };
    const typed = new Typed(targetElement, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="flex-container">
        <div className="flex-item-left">
          <img src={viteLogo} className='nft' alt="nft" />
        </div>
        <div className="flex-item-right">
          <h1 id="typed-text"></h1>
          <p> Follow On Twitter <a href=""> Click</a> </p>
          <p> Follow On Twitter <a href=""> Click</a> </p>
          <div className='wbutton'> 
          <Web3Button style={myStyles}
      contractAddress="0x523B792D14a47cf8dc985bb4562908303FAEe43E"
      onSuccess={(_result) => alert("Success!")}
      onError={(_error) => alert("Not Enought Matic")}
      action={async (contract) => {
        await contract.erc721.claim(1);
      }}
    >
      Claim NFT
    </Web3Button>
    </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
