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

          {/* Floating Glass Card (repositioned) */}
          <div className="glass-card hero-floating-card">
            <p>Celestial Residence</p>
            <span>Featured Concept</span>
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
          <svg viewBox="0 0 32 32" className="whatsapp-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2.016C8.28 2.016 2 8.297 2 16.016c0 2.57.695 5.031 3.96 7.234l-1.556 5.265 5.442-1.54C11.971 28.158 14.38 28.792 16.881 28.792c.368 0 .736-.002 1.105-.011.014 0 .027 0 .041 0 7.731 0 14-6.269 14-14 0-7.731-6.269-14-14-14Zm0 2.367c6.417 0 11.617 5.2 11.617 11.617 0 6.417-5.2 11.617-11.617 11.617-2.12 0-4.15-.566-5.95-1.607l-.44-.26-3.827 1.08 1.109-3.73-.281-.45c-1.146-1.92-1.728-4.18-1.728-6.65 0-6.417 5.2-11.617 11.617-11.617Zm-4.832 5.184c-.297-.004-.935.211-1.456.772-.49.529-1.702 1.683-1.702 4.051 0 2.368 1.746 4.644 1.99 4.973.244.329 3.385 5.173 8.15 7.231 1.134.49 2.019.788 2.715 1.009 1.142.362 2.172.311 2.974.191.904-.135 2.782-1.137 3.166-2.226.38-.1093.38-2.019.257-2.218-.122-.199-.427-.314-.886-.545-.458-.231-2.721-1.35-3.15-1.514-.426-.164-.732-.246-1.037.214-.306.46-1.189 1.45-1.464 1.779-.275.329-.55.362-1.008.131-.459-.231-1.946-.722-3.721-2.319-1.377-1.241-2.314-2.747-2.589-3.208-.275-.461-.029-.708.201-.935.205-.204.459-.528.688-.792.229-.264.306-.462.459-.792.153-.33.076-.61-.039-.841-.115-.231-1.033-2.485-1.414-3.424-.377-.917-.756-.79-.1037-.807l-.533-.024Z" />
          </svg>
        </a>
      )}
    </div>
  );
}

export default App;

