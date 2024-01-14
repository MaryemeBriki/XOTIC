import React, { useState } from 'react';
import { Link } from 'gatsby';
import './layout.css';
import SearchBar from './SearchBar'; // Update the path accordingly
import logo from '../images/alumni-logo.png';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav className={`navbar ${showMenu ? 'show-menu' : ''}`}>
        <span className="hamburger-btn material-symbols-rounded" onClick={toggleMenu}>
          menu
        </span>
        <div className="logo">
          <img src={logo} alt="logo" style={{ height: '150px', width:'200px' }} />
          
        </div>

        {/* Add the SearchBar component here */}
      

        <ul className="links">
          <span className="close-btn material-symbols-rounded" onClick={toggleMenu}>
            close
          </span>
          {/* Update the Home link to use Link */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ContactPage">Contact us</Link></li>
          <li><Link to="/About">About us</Link></li>
        </ul>
       <SearchBar />
        <button className="login-btn"> 
        <Link to="/Login">LOG IN</Link></button>
      </nav>
    </header>
  );
};

export default Header;
