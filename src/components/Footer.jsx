import React from 'react';
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaFacebookF, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    // Logo SVG (mirroring the one from App.jsx for brand consistency)
    const LogoSVG = () => (
        <svg width="40" height="20" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="premiumGoldFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5E6AD" />
                    <stop offset="50%" stopColor="#C49A45" />
                    <stop offset="100%" stopColor="#846625" />
                </linearGradient>
            </defs>
            <g>
                <path d="M68 60 C50 45 30 25 10 15 C20 22 35 35 55 52 Z" fill="#FFFFFF" fillOpacity="0.4" />
                <path d="M65 60 C45 42 22 20 5 15 C15 22 35 40 50 56 Z" fill="url(#premiumGoldFooter)" />
                <path d="M72 60 C90 45 110 25 130 15 C120 22 105 35 85 52 Z" fill="#FFFFFF" fillOpacity="0.4" />
                <path d="M75 60 C95 42 118 20 135 15 C125 22 105 40 90 56 Z" fill="url(#premiumGoldFooter)" />
            </g>
        </svg>
    );

    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <div className="footer-logo-box">
                            <LogoSVG className="footer-wings-icon" />
                            <h2>
                                <span className="wings-text">Wings</span>
                                <span className="design-text">Design</span>
                            </h2>
                        </div>
                        <p className="footer-about">
                            Surat’s premier turnkey interior design studio. We specialize in crafting high-end, bespoke residential and commercial masterpieces through architectural excellence.
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-column">
                        <h4 className="footer-title">Navigation</h4>
                        <ul className="footer-links">
                            <li><a href="#projects">Our Portfolio</a></li>
                            <li><a href="#services">Specialization</a></li>
                            <li><a href="#about">The Studio</a></li>
                            <li><a href="#contact">Consultation</a></li>
                        </ul>
                    </div>

                    {/* Social Media Column */}
                    <div className="footer-column">
                        <h4 className="footer-title">Connect</h4>
                        <div className="footer-social-links">
                            <a 
                                href="https://www.instagram.com/wings_design_studio/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="social-icon-btn"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a 
                                href="https://wa.me/917990207778" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="social-icon-btn"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/heenaa-panchal-4139b422a/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="social-icon-btn"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a 
                                href="#" 
                                className="social-icon-btn"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>
                        </div>
                        <p className="footer-about" style={{ marginTop: '30px' }}>
                            Follow our journey for daily design inspiration and behind-the-scenes content.
                        </p>
                    </div>

                    {/* Contact Column */}
                    <div className="footer-column">
                        <h4 className="footer-title">Our Studio</h4>
                        <ul className="footer-contact-info">
                            <li>
                                <FaMapMarkerAlt />
                                <a 
                                    href="https://www.google.com/maps/search/?api=1&query=6Q69%2B73G+Gaurav+Path+Road+Surat" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                >
                                    <span>109, Arihant Dreams, Opp Croma, <br/> Gaurav Path Road, <br/> Surat - 395009</span>
                                </a>
                            </li>
                            <li>
                                <FaPhoneAlt />
                                <a href="tel:+917990207778" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <span>+91 79902 07778</span>
                                </a>
                            </li>
                            <li>
                                <FaEnvelope />
                                <a href="mailto:info@wingsdesign.studio" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <span>info@wingsdesign.studio</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright-text">
                        &copy; {new Date().getFullYear()} Wings Design Studio. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
