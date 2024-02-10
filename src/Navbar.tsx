import { Link } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav>
      <div className="logo-container">
        <Link to="/" className="logox">Pixir</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span>&#9776;</span>
      </div>
      <ul className={`menu-list ${menuActive ? 'active' : ''}`}>
        <li><Link className='xheader' to="/shop">Shop</Link></li>
        <li><Link className='xheader' to="/airdrop">Airdrop</Link></li>
        <li><Link className='xheader' to="/rules">Rules</Link></li>
        <li><Link className='xheader' to="https://twitter.com/pixirweb">Twitter</Link></li>
        
      </ul>
    </nav>
  );
}
export default Navbar;
