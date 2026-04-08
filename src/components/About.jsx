import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-premium-section" id="about" ref={sectionRef}>
      <div className="about-premium-bg-text">STUDIO</div>
      
      <div className="about-premium-container">
        {/* Left Content - Typography & Story */}
        <div className="about-premium-content anim-slide-right">
          <div className="about-premium-badge">
            <span className="gold-line"></span>
            <span className="badge-text">The Legacy of Wings</span>
          </div>
          
          <h2 className="about-premium-title">
            From sketching <span className="text-gold-light">dream spaces</span> together <br/>
            to shaping <span className="text-italic-gold">luxury interiors.</span>
          </h2>
          
          <p className="about-premium-desc">
            Heenaa and Sanket Panchal turned their shared passion into Surat's most visionary design studio. 
            Blending masculine structural precision with feminine stylistic grace, we curate masterpieces deeply 
            connected to the families who inhabit them.
          </p>
          
          <div className="about-premium-quote">
            <div className="quote-icon">"</div>
            <p>Every home we build is a new chapter in someone's story, crafted with total comfort and breathtaking personalization.</p>
          </div>
          
          <div className="about-premium-stats">
            <div className="stat-block">
              <span className="stat-value">50+</span>
              <span className="stat-label">Bespoke<br/>Projects</span>
            </div>
            <div className="stat-block">
              <span className="stat-value">2020</span>
              <span className="stat-label">Established<br/>In Surat</span>
            </div>
          </div>
        </div>

        {/* Right Content - Elegant Image Grid */}
        <div className="about-premium-gallery anim-slide-left">
          
          {/* Card 1 */}
          <div className="premium-image-card card-heenaa">
            <div className="art-frame-container">
              <div className="frame-bracket-top-left"></div>
              <div className="frame-bracket-bottom-right"></div>
              
              <div className="premium-image-wrapper">
                <img src="/female.jpeg" alt="Heenaa Panchal" className="premium-img" />
              </div>
            </div>
            
            <div className="premium-card-footer">
              <h3>Heenaa Panchal</h3>
              <span>Principal Designer</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="premium-image-card card-sanket">
             <div className="art-frame-container">
              <div className="frame-bracket-top-left"></div>
              <div className="frame-bracket-bottom-right"></div>

              <div className="premium-image-wrapper">
                <img src="/male.jpeg" alt="Sanket Panchal" className="premium-img" />
              </div>
            </div>

            <div className="premium-card-footer">
              <h3>Sanket Panchal</h3>
              <span>Principal Architect</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
