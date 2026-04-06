import React from 'react';
import './Navbar.css';

const Navbar = ({ scrolled, toggleMobileMenu }) => {
  const LogoOfficial = () => (
    <img src="/Golden wings in flight.png" alt="Wings Design Logo" className="nav-fixed-logo" />
  );

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <LogoOfficial />
          <span className="logo-text">Wings Design</span>
        </div>

        <div className="navbar-right">
          <div className="navbar-links-wrapper">
            <ul className="nav-links">
              <li><a href="#projects">Our Portfolio</a></li>
              <li><a href="#services">Specialization</a></li>
              <li><a href="#about">The Studio</a></li>
            </ul>
          </div>
          <div className="mobile-menu-icon" aria-label="Toggle Navigation" onClick={toggleMobileMenu}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
