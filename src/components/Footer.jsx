import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaFacebookF, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import './Footer.css';
import React, { useState } from 'react';

const Footer = () => {
    const [legalModal, setLegalModal] = useState(null);

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
                                <a href="mailto:wingsdesignfirm@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    <span>wingsdesignfirm@gmail.com</span>
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
                        <span onClick={() => setLegalModal('privacy')} className="legal-link">Privacy Policy</span>
                        <span onClick={() => setLegalModal('terms')} className="legal-link">Terms of Service</span>
                    </div>
                </div>
            </div>

            {legalModal && (
                <div className="legal-modal-overlay" onClick={() => setLegalModal(null)}>
                    <div className="legal-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="legal-modal-close" onClick={() => setLegalModal(null)}>
                            <FaTimes />
                        </button>
                        {legalModal === 'privacy' ? (
                            <div className="legal-text-body">
                                <h2>Privacy Policy</h2>
                                <p>Effective Date: {new Date().getFullYear()}</p>
                                <p>Wings Design Studio ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Wings Design Studio.</p>
                                
                                <h3>Information We Collect</h3>
                                <p>We may collect personal information such as your name, email address (e.g., wingsdesignfirm@gmail.com), phone number, and physical address when you inquire about our interior architecture and design services.</p>
                                
                                <h3>How We Use Your Information</h3>
                                <p>The information we collect is used to communicate with you regarding your project, provide consultation services, improve your experience on our website, and occasionally send updates regarding our portfolio.</p>
                                
                                <h3>Data Protection</h3>
                                <p>We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or transfer your personally identifiable information to outside parties.</p>
                                
                                <h3>Contact Us</h3>
                                <p>If you have any questions regarding this Privacy Policy, you may contact us using the information below: <br/> Email: wingsdesignfirm@gmail.com <br/> Phone: +91 79902 07778</p>
                            </div>
                        ) : (
                            <div className="legal-text-body">
                                <h2>Terms of Service</h2>
                                <p>Effective Date: {new Date().getFullYear()}</p>
                                <p>Welcome to Wings Design Studio. By accessing our website, you agree to these Terms of Service.</p>
                                
                                <h3>Services Provided</h3>
                                <p>Wings Design Studio provides luxury interior architecture and turnkey delivery services. The content on this website is for informational purposes and may be updated continuously.</p>
                                
                                <h3>Intellectual Property</h3>
                                <p>All content included on this site, such as project gallery images, text, graphics, logos, and the compilation thereof, is the property of Wings Design Studio and protected by applicable copyright and intellectual property laws.</p>
                                
                                <h3>Limitation of Liability</h3>
                                <p>In no event shall Wings Design Studio be liable for any direct, indirect, incidental, or consequential damages arising out of or in connection with your use of our website or services.</p>
                                
                                <h3>Governing Law</h3>
                                <p>These terms shall be governed by and construed in accordance with the laws of India, specifically within the jurisdiction of Surat, Gujarat.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
