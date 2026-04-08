import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaFacebookF, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css';
import React from 'react';

const Footer = () => {
    // Logo SVG (mirroring the one from App.jsx for brand consistency)
    // Official Logo from public folder
    const LogoIMG = () => (
        <img src="/winglogo.png" alt="Wings Design Logo" className="footer-wings-icon" />
    );

    return (
        <footer className="footer-section" id="contact">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <div className="footer-logo-box">
                            <LogoIMG />
                        </div>
                        <div className="footer-studio-badge">Surat Premier Design Studio</div>
                        <p className="footer-about">
                            Redefining luxury living through architectural precision and bespoke craftsmanship. We transform spaces into timeless experiences.
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
                                href="https://instagram.com" 
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
