import viteLogo from '/pixir.png';
import './styles/Home.css'
import TwitterLoginButton from './components/Login';


function Home() {
  return (
    <>    <div className="pagecontainer">
    <h1>Pixir Quest</h1>
    <p>Complete your Journey to earn rewards</p>
  </div>

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
    </>
  );
}

export default Home;
