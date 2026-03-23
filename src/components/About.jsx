import React from 'react';
import wingsImg from '../assets/wings_premium.png';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Left Side: Overlapping Portraits */}
        <div className="about-visuals">
          <div className="image-wrapper founder-1">
            {/* Female Placeholder */}
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" alt="Heenaa Panchal" />
          </div>
          <div className="image-wrapper founder-2">
            {/* Male Placeholder */}
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" alt="Co-Founder" />
            <div className="experience-badge">
              <span className="years">12+</span>
              <span className="text">Years of<br/>Design Synergy</span>
            </div>
          </div>
        </div>

        {/* Right Side: Philosophy & Intro */}
        <div className="about-content">
          <span className="section-subtitle">Meet the Visionaries</span>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>The Principal Designers</h2>
          
          <div className="founders-names">
            <h3>Heenaa Panchal & <span>Sanket Panchal</span></h3>
            <p className="designation">Founders & Lead Architects</p>
          </div>

          <p className="about-description drop-cap-para">
            Together in life and design, Heenaa and Sanket bring a uniquely harmonious synergy to every space they curate. What began as a shared passion for aesthetic perfection has flourished into Surat's most trusted luxury turnkey interior firm.
          </p>
          
          <div className="about-quote-box">
            <svg className="quote-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 11H6C6 8.23858 8.23858 6 11 6V4C7.13401 4 4 7.13401 4 11V19H10V11ZM20 11H16C16 8.23858 18.23858 6 21 6V4C17.134 4 14 7.13401 14 11V19H20V11Z" fill="currentColor"/>
            </svg>
            <p className="about-quote-text">
              "We believe that true luxury lies at the intersection of absolute comfort and breathtaking personalization. By blending masculine architectural precision with warm, feminine stylistic grace, we create masterpieces deeply connected to the families who inhabit them."
            </p>
          </div>

          <img src={wingsImg} alt="Wings Design Signature" className="founders-signature" />
        </div>

      </div>
    </section>
  );
};

export default About;
