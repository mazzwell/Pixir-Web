import React from 'react';
import './App.css';

function Section3() {

  const web: React.CSSProperties = {
    color: "#fff",
    backgroundColor: "black",
    fontWeight: "bold",
    borderRadius: "8px",
    transition: "background-color 0.3s, border-color 0.3s, box-shadow 0.3s",
    border: "1px solid #86bf00",
    padding: "15px",
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
            <p> 30% discount for early birds </p>
            <a> Price: 0.001 MATIC </a>
            <br/>
            <a href="https://morkie.xyz/pixir"
                style={web}
              > Buy&nbsp;&nbsp;$Pixir
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
