import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      {/* Background Texture Overlay */}
      <div className="about-texture-overlay"></div>
      
      <div className="about-container">
        
        {/* Modern Broken Grid Layout */}
        <div className="about-visuals-grid">
          <div className="visual-card primary-portrait reveal-up">
            <img src="/female.jpeg" alt="Heenaa Panchal" className="parallax-img" />
            <div className="image-accent-border"></div>
          </div>
          
          <div className="visual-card secondary-portrait reveal-down">
            <img src="/male.jpeg" alt="Sanket Panchal" className="parallax-img" />
            <div className="floating-trust-tag project-tag">
              <span className="tag-num">50+</span>
              <span className="tag-label">Projects<br/>Delivered</span>
            </div>
          </div>

          <div className="visual-card experience-square reveal-left">
            <div className="exp-content">
              <span className="exp-year">2020</span>
              <span className="exp-label">Serving Since</span>
            </div>
            <div className="exp-blur-bg"></div>
          </div>
        </div>

        {/* Storytelling Side */}
        <div className="about-content reveal-right">
          <div className="story-header">
            <span className="legacy-text">The Legacy of Wings</span>
            <div className="gold-dash"></div>
          </div>
          
          <h2 className="philosophy-title">
            From sketching <span className="highlight-text">dream spaces</span> together <br/>
            to shaping <span className="italic-text">luxury interiors.</span>
          </h2>
          
          <div className="story-description">
            <p>
              Heenaa and Sanket Panchal turned their shared passion into Surat's most visionary design studio. 
              Our journey is defined by more than just blueprints—it's about the soul of a home. 
              We blend masculine structural precision with feminine stylistic grace to curate masterpieces 
              deeply connected to the families who inhabit them.
            </p>
          </div>

          <div className="about-quote-box-premium">
            <div className="quote-mark">“</div>
            <p className="quote-body">
              True luxury is found at the intersection of total comfort and breathtaking personalization. 
              Every home we build is a new chapter in someone’s story.
            </p>
          </div>

          <div className="about-footer-stats">
            <div className="mini-stat">
              <h4>Visionary</h4>
              <span>Design Approach</span>
            </div>
            <div className="mini-stat">
              <h4>Turnkey</h4>
              <span>Full Execution</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
