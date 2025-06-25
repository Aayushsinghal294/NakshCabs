import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Replace with actual logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-items">
          <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/rides">Rides</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li>
              <Link to="/book">
                <button className="btn book-btn">Book Now</button>
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="nav-mob-open" onClick={toggleMenu}>
          <span className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div className={`nav-mob-close ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span>&times;</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;