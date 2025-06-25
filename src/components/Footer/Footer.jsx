import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <img src="path/to/logo.png" alt="Logo" className="logo1" />
        </div>
        <div className="footer-section">
          <h2>About Us</h2>
          <p>We provide the best cab services in the city. Our drivers are professional and our cars are well-maintained.</p>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <ul>
            <li><a href="mailto:info@nakshcabs.com">info@nakshcabs.com</a></li>
            <li><a href="tel:+1234567890">+123 456 7890</a></li>
            <li><a href="https://www.nakshcabs.com">www.nakshcabs.com</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Naksh Cabs. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;