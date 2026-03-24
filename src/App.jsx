import React, { useState, useEffect } from 'react';
import './App.css';
import heroImg from './assets/hero_bright_gold.png';
import wingsImg from './assets/wings_premium.png';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    // Elegant intro takes ~3.5s (3s trace/fill delay + 0.5s linger) before triggering fade
    const timer1 = setTimeout(() => setIsLoaded(true), 3500);
    // Remove the intro from the DOM completely after the fade completes (about 1.5s after fade start)
    const timer2 = setTimeout(() => setHideIntro(true), 5200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Complex highly layered actual wing array for logo
  const LogoWing = ({ className }) => (
    <svg className={className} viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldFeather" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff8e7" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA7C11" />
        </linearGradient>
        <linearGradient id="whiteFeather" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0eade" />
        </linearGradient>
        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#8B6914" floodOpacity="0.2"/>
        </filter>
      </defs>

      {/* Left Wing Layers */}
      <g filter="url(#softShadow)">
        <path d="M68 60 C50 45 30 25 10 15 C20 22 35 35 55 52 Z" fill="url(#whiteFeather)" />
        <path d="M65 60 C45 42 22 20 5 15 C15 22 35 40 50 56 Z" fill="url(#goldFeather)" />
        <path d="M62 60 C40 38 15 15 0 15 C15 25 35 45 45 58 Z" fill="url(#whiteFeather)" />
        <path d="M67 55 C55 35 40 20 25 10 C35 20 45 35 56 48 Z" fill="url(#goldFeather)" />
        <path d="M68 62 C55 48 35 30 15 20 C25 28 40 45 58 55 Z" fill="url(#whiteFeather)" />
      </g>
      
      {/* Right Wing Layers */}
      <g filter="url(#softShadow)">
        <path d="M72 60 C90 45 110 25 130 15 C120 22 105 35 85 52 Z" fill="url(#whiteFeather)" />
        <path d="M75 60 C95 42 118 20 135 15 C125 22 105 40 90 56 Z" fill="url(#goldFeather)" />
        <path d="M78 60 C100 38 125 15 140 15 C125 25 105 45 95 58 Z" fill="url(#whiteFeather)" />
        <path d="M73 55 C85 35 100 20 115 10 C105 20 95 35 84 48 Z" fill="url(#goldFeather)" />
        <path d="M72 62 C85 48 105 30 125 20 C115 28 100 45 82 55 Z" fill="url(#whiteFeather)" />
      </g>
    </svg>
  );

  return (
    <div className="app-container">
      {/* Elegant, Fluent SVG Line Tracing Intro */}
      {!hideIntro && (
        <div className={`intro-master ${isLoaded ? 'fade-out' : ''}`}>
          <div className="intro-content">
            <LogoWing className="intro-wings-icon" />
            <h1 className="intro-text">Wings Design</h1>
            <p className="intro-subtitle">THE INTERIOR DESIGN STUDIO</p>
          </div>
        </div>
      )}

      {/* Main Content (Revealed dynamically by wings) */}
      <div className={`main-content ${isLoaded ? 'visible' : ''}`}>
        
        {/* Navbar Minimalist */}
        <nav className="navbar">
          <div className="logo">
            <LogoWing className="nav-wings-icon" />
            <div className="logo-text">
              <h2>Wings Design</h2>
            </div>
          </div>
          <ul className="nav-links">
            <li><a href="#work">Our Portfolio</a></li>
            <li><a href="#services">Specialization</a></li>
            <li><a href="#about">The Studio</a></li>
          </ul>
          
          {/* Mobile menu icon */}
          <div className="mobile-menu-icon" aria-label="Toggle Navigation" onClick={toggleMobileMenu}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </nav>

        {/* Premium Full-Screen Mobile Drawer */}
        <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="drawer-header">
            <LogoWing className="drawer-logo" />
            <div className="close-btn" onClick={toggleMobileMenu}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <ul className="drawer-links">
            <li><a href="#work" onClick={toggleMobileMenu}>Our Portfolio</a></li>
            <li><a href="#services" onClick={toggleMobileMenu}>Specialization</a></li>
            <li><a href="#about" onClick={toggleMobileMenu}>The Studio</a></li>
            <li><span className="drawer-contact-btn">Established in 2020</span></li>
          </ul>
        </div>

        {/* Hero Section */}
        <section className="hero">
          {/* Full Background Layer */}
          <div className="hero-bg-container">
            <img src={heroImg} alt="Celestial Residence Concept" className="hero-bg-image" />
            <div className="hero-bg-overlay"></div>
          </div>

          <div className="hero-content">
            <div className="badge">Trusted Turnkey Solution Provider</div>
            <h1 className="hero-title">
              Crafting <span>Modern Luxury</span> <br/> Interiors
            </h1>
            <p className="hero-description">
              Led by entrepreneur Heenaa Panchal, Wings Design is Surat's premier interior consulting firm. We specialize in delivering bespoke, modern luxury spaces wrapped in seamless, trusted turnkey solutions.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">View Masterpieces</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>Turnkey</h3>
                <p>Solutions</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <h3>Luxury</h3>
                <p>Interiors</p>
              </div>
              <div className="stat-divider"></div>
              <div className="stat">
                <h3>Surat</h3>
                <p>Gujarat</p>
              </div>
            </div>
          </div>

         
          {/* Decorative Elements */}
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </section>

        <Projects />
        <About />
      </div>

      {/* Floating WhatsApp Button */}
      {isLoaded && (
        <a 
          href="https://wa.me/917990207778" 
          className="floating-whatsapp"
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <svg viewBox="0 0 16 16" className="whatsapp-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
        </a>
      )}
    </div>
  );
}

export default App;

