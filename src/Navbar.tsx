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
      <ul>
        <li>
          <Link to="/" className="logox">Pixir
          </Link>
        </li>
        <li className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </li>
        <li className={`menu-list ${menuActive ? 'active' : ''}`}>
          <Link to="/section1">Stake</Link>
        </li>
        <li className={`menu-list ${menuActive ? 'active' : ''}`}>
          <Link to="/section2">Airdrop</Link>
        </li>
        <li className={`menu-list ${menuActive ? 'active' : ''}`}>
          <Link to="/">Twitter</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
