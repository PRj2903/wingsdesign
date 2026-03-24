import React, { useRef, useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      fullImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2400&q=90",
      category: "Residential",
      name: "The Elysian Penthouse",
      description: "A breathtaking high-rise sanctuary bathed in natural light, featuring bespoke joinery, curated art pieces, and panoramic city views. Every inch is crafted to exude refined modern luxury."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
      fullImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=2400&q=90",
      category: "Turnkey Luxury",
      name: "Aura Villa Estate",
      description: "A seamless blend of indoor and outdoor living. This vast estate embraces earthy tones, organic textures, and premium metallic accents to create a tranquil, resort-like atmosphere."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1599420186846-5b3dddb74ad8?w=1200&q=80",
      fullImage: "https://images.unsplash.com/photo-1599420186846-5b3dddb74ad8?w=2400&q=90",
      category: "Commercial",
      name: "Lumiere Dining Suite",
      description: "An exclusive culinary atmosphere designed with ambient lighting, rich upholstery, and acoustically treated sculptural ceilings, creating an unforgettable and intimate dining experience."
    }
  ];

  const scrollProjects = (direction) => {
    if (projectsRef.current) {
      // Since cards are 100vw now, scroll precisely by screen width
      const scrollAmount = window.innerWidth;
      projectsRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeProject();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
        {projectsData.map((project) => (
          <div className="project-card" key={project.id} onClick={() => openProject(project)}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.name} className="project-image" />
              <div className="project-overlay">
                <div className="project-content">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-name">{project.name}</h3>
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
        ))}
      </div>

      {/* Elegant Project Modal Overlay */}
      <div className={`project-modal-wrapper ${selectedProject ? 'active' : ''}`}>
        <div className="project-modal-backdrop" onClick={closeProject}></div>
        {selectedProject && (
          <div className="project-modal-content">
            <div className="modal-close-btn" onClick={closeProject}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="modal-image-container">
              <img src={selectedProject.fullImage} alt={selectedProject.name} className="modal-main-image" />
              <div className="modal-image-overlay"></div>
            </div>
            
            <div className="modal-info-panel">
              <span className="modal-category">{selectedProject.category}</span>
              <h2 className="modal-title">{selectedProject.name}</h2>
              <div className="modal-divider"></div>
              <p className="modal-description">{selectedProject.description}</p>
              
              <div className="modal-actions">
                <button className="btn-primary" onClick={(e) => { e.stopPropagation(); alert('Inquiry feature coming soon!'); }}>
                  Inquire About Project
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
