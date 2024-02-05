import viteLogo from '/xxs.png';
import './App.css';
import TwitterLoginButton from './components/Login';


function Home() {
  return (
    <div className="container">
      <div className="flex-container">
        <div className="flex-item-left">
          <img src={viteLogo} className='nft' alt="nft" />
        </div>
        <div className="flex-item-right">
          <h1>Hello</h1>
          <p> <TwitterLoginButton /> </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
