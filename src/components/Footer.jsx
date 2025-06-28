import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-10 pb-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start px-6 md:px-0">
      <div className="mb-8 md:mb-0">
        <img src={logo} alt="Logo" className="w-60 h-32 mb-4" />
      </div>
      <div className="mb-8 md:mb-0">
        <h2 className="text-xl font-bold mb-2">About Us</h2>
        <p className="max-w-xs text-gray-300">
          We provide the best cab services in the city. Our drivers are professional and our cars are well-maintained.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
        <ul>
          <li className="mb-1">
            <a href="mailto:info@nakshcabs.com" className="hover:text-yellow-400 transition">info@nakshcabs.com</a>
          </li>
          <li className="mb-1">
            <a href="tel:+1234567890" className="hover:text-yellow-400 transition">+123 456 7890</a>
          </li>
          <li>
            <a href="https://www.nakshcabs.com" className="hover:text-yellow-400 transition">www.nakshcabs.com</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
      &copy; {new Date().getFullYear()} Naksh Cabs. All rights reserved.
    </div>
  </footer>
);

export default Footer;