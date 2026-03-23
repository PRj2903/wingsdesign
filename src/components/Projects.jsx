import React, { useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef(null);

  const scrollProjects = (direction) => {
    if (projectsRef.current) {
      // Scroll by roughly 60% of window width
      const scrollAmount = window.innerWidth * 0.6;
      projectsRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="projects" id="work">
      <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
        <div className="header-text" style={{ textAlign: 'left' }}>
          <span className="section-subtitle">Our Work</span>
          <h2 className="section-title" style={{ margin: 0 }}>Selected Masterpieces</h2>
        </div>
        
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={() => scrollProjects('left')} aria-label="Previous project">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="carousel-btn" onClick={() => scrollProjects('right')} aria-label="Next project">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="projects-grid" ref={projectsRef}>
        {/* Project 1 */}
        <div className="project-card">
          <div className="project-image-wrapper">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80" alt="The Elysian Penthouse" className="project-image" />
            <div className="project-overlay">
              <div className="project-content">
                <span className="project-category">Residential</span>
                <h3 className="project-name">The Elysian Penthouse</h3>
              </div>
              <div className="project-link">
                 <span>View Project</span>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-image-wrapper">
            <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80" alt="Aura Villa Estate" className="project-image" />
            <div className="project-overlay">
              <div className="project-content">
                <span className="project-category">Turnkey Luxury</span>
                <h3 className="project-name">Aura Villa Estate</h3>
              </div>
              <div className="project-link">
                 <span>View Project</span>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="project-image-wrapper">
            <img src="https://images.unsplash.com/photo-1599420186846-5b3dddb74ad8?w=1200&q=80" alt="Lumiere Dining Suite" className="project-image" />
            <div className="project-overlay">
              <div className="project-content">
                <span className="project-category">Commercial</span>
                <h3 className="project-name">Lumiere Dining Suite</h3>
              </div>
              <div className="project-link">
                 <span>View Project</span>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                   <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="projects-footer">
        <button className="btn-secondary">
          View All Archives 
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{marginLeft: '10px'}}>
             <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Projects;
