import React, { useState } from 'react';
import './styles/Home.css'
import { Web3Button } from "@thirdweb-dev/react";

function Section3() {
  const [inputValue, setInputValue] = useState<number>(5000); // Initial value set to 5000

  const web: React.CSSProperties = {
    color: "#fff",
    backgroundColor: "black",
    fontWeight: "bold",
    borderRadius: "8px",
    transition: "background-color 0.3s, border-color 0.3s, box-shadow 0.3s",
    border: "1px solid #86bf00",
    padding: "15px",
  };

  // Adjusted to handle slider input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  return (
    <>
      <div className="pagecontainer">
        <h1>Shop</h1>
        <p>$Pixir Pre-Sale</p>
      </div>
      <div className="container">
        <div className="flex-container">
          <div className="flex-item-left">
            <img className='nft' src='/shop.png' alt="NFT"/>
          </div>
          <div className="flex-item-right">
            <h1> Pixir Token </h1>
            <p> 20% discount For early birds </p>
            <p> Price: 0.001 Matic </p>
            <input
              type="range"
              min="1000" // Minimum value for the slider
              max="1000000" // Maximum value for the slider
              value={inputValue}
              onChange={handleInputChange}
              style={{ width: '100%', marginBottom: '20px' }} // Adjusted styling for better usability
            />
            <div>Selected amount: {inputValue.toLocaleString()}</div> {/* Display the selected amount */}
            <br/>
            <Web3Button
                style={web}
                contractAddress="0x7371A967C8F53F0B4586F5EbCaFcA9EacEcCCF41"
                onError={(error) => console.error("Minting error:", error)}
                action={async (contract) => {
                  await contract.erc20.claim(inputValue);
                }}
              > Buy&nbsp;&nbsp;Pixir
            </Web3Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
