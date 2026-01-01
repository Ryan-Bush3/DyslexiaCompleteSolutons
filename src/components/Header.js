import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/assets/logo.png" alt="Dyslexia Complete Solutions" className="logo-img" />
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Dyslexia</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        
        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={faBookOpen} className="menu-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;