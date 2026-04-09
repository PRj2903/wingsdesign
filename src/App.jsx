import React, { useState, useEffect } from 'react';
import './App.css';


import LuxuryIntro from './components/LuxuryIntro';
import Projects from './components/Projects';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    // Reveal starts after the branding presentation (~3.5s)
    const timer1 = setTimeout(() => setIsLoaded(true), 3500);
    // Remove intro from DOM after panels fully clear (~5s)
    const timer2 = setTimeout(() => setHideIntro(true), 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Complex highly layered actual wing array for logo
  // Official SVG logo for navbar and drawer (matching the intro style)
  const LogoOfficial = ({ className }) => (
    <img src="/winglogo.png" alt="Wings Design Logo" className={className} />
  );

  // SVG tracing logo for introduction
  const LogoIntro = ({ className }) => (
    <img src="/winglogo.png" alt="Wings Design Introduction" className={className} />
  );

  return (
    <div className="app-container">
      {/* Premium Cinematic Intro Sequence */}
      <LuxuryIntro />

      {/* Main Content (Revealed dynamically by wings) */}
      <div className={`main-content ${isLoaded ? 'visible' : ''}`}>
        
        <Navbar scrolled={scrolled} toggleMobileMenu={toggleMobileMenu} />

        {/* Premium Full-Screen Mobile Drawer */}
        <div className={`mobile-drawer ${isMobileMenuOpen ? 'is-open' : ''}`}>
          <div className="drawer-header">
            <LogoOfficial className="drawer-logo" />
            <div className="close-btn" onClick={toggleMobileMenu}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <ul className="drawer-links">
            <li><span className="drawer-num">01.</span><a href="#projects" onClick={toggleMobileMenu}>Our Portfolio</a></li>
            <li><span className="drawer-num">02.</span><a href="#services" onClick={toggleMobileMenu}>Specialization</a></li>
            <li><span className="drawer-num">03.</span><a href="#about" onClick={toggleMobileMenu}>The Studio</a></li>
            <li><span className="drawer-contact-btn">Established in 2020</span></li>
          </ul>
        </div>

        {/* Premium Editorial Hero Section - Split Layout */}
        <section className="hero">
          <div className="hero-left-sidebar">
            <div className="hero-content-inner">
              <LogoOfficial className="hero-highlight-logo" />
              <div className="hero-badge-row">
                <span className="hero-tag">Interior Architecture</span>
                <span className="hero-tag-separator"></span>
                <span className="hero-tag">Surat, Gujarat</span>
              </div>

              <h1 className="hero-display-title">
                Architecture of <br/>
                <span className="italic-gold">Atmosphere</span><br/>
                & Modern Living
              </h1>

              <p className="hero-editorial-desc">
                Led by Heenaa Panchal, Wings Design Studio transforms residential and commercial spaces into timeless architectural masterpieces that prioritize both fluent utility and bespoke elegance.
              </p>

              <div className="hero-cta-group">
                <button className="hero-btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                  View Projects
                </button>
              </div>
            </div>

            {/* Bottom Info Bar - Minimalist Stats */}
            <div className="hero-bottom-bar">
              <div className="footer-stats-item">
                <span className="stat-value">50+</span>
                <span className="stat-label">Bespoke Projects</span>
              </div>
              <div className="footer-stats-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Turnkey Delivery</span>
              </div>
              <div className="footer-stats-item">
                <span className="stat-value">10+</span>
                <span className="stat-label">Years of Craft</span>
              </div>
            </div>
          </div>

          <div className="hero-right-sidebar">
            {/* Original Architecture Masterpiece Image */}
            <img 
              src="/hero.png" 
              alt="Wings Design Masterpiece" 
              className="hero-split-image" 
            />
          </div>
        </section>


        <Projects />
        <Services />
        <About />
        <Footer />
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
      <Analytics />
    </div>
  );
}

export default App;
