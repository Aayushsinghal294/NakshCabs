import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/rides', label: 'Rides' },
    { to: '/packages', label: 'Packages' },
    { to: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 z-[1000] transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-yellow-400/20' 
        : 'bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm'
    }`}>
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 group">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-black font-bold text-xl">N</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Naksh Cabs
              </h1>
              <p className="text-xs text-gray-400">Premium Rides</p>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-lg font-semibold transition-all duration-300 hover:text-yellow-400 group ${
                location.pathname === link.to ? 'text-yellow-400' : 'text-white'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </div>

        {/* Contact Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+91-966-961-0726"
            className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
          >
            <Phone size={16} />
            <span className="font-semibold">Call</span>
          </a>
          <Link
            to="/book"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white hover:text-yellow-400 transition-colors duration-300"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-black via-gray-900 to-black z-[2000] transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 lg:hidden`}
        >
          <div className="p-6">
            <button
              className="float-right text-white hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            
            <div className="clear-both mt-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold">N</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-yellow-400">Naksh Cabs</h2>
                  <p className="text-xs text-gray-400">Premium Rides</p>
                </div>
              </div>

              <nav className="space-y-4">
                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block text-xl font-semibold transition-colors duration-300 hover:text-yellow-400 ${
                      location.pathname === link.to ? 'text-yellow-400' : 'text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 space-y-3">
                <a
                  href="tel:+91-966-961-0726"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-full font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
                <Link
                  to="/book"
                  className="block text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-3 rounded-full font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  Book Ride
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1500] lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;