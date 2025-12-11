import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Dyslexia Complete Solutions</h1>
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
          <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;