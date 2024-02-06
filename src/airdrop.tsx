import './App.css';

function Home() {

  return (
    <>
    <div className="pagecontainer">
      <h1>LeaderBoard</h1>
      <p>Total price Pool 🔥 1M $Pixir</p>
    </div>
    <div className="container">
      <div className="flex-container">
        <div className="flex-item-left">
        <img className='nft' src='/ld.png'/>
        </div>
        <div className="flex-item-right">
          <p> The leaderboard refreshes every 24 hours</p>
          <a>1) 0xA239366d40b724dD2b7F1E5750E82cf4D56Aa7c2 </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
