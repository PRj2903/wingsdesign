import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { FaArrowLeft, FaArrowRight, FaMapMarkerAlt, FaLongArrowAltRight, FaTimes, FaExpand } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Refs for reading latest values inside GSAP callbacks (avoids stale closures)
  const currentIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const selectedProjectRef = useRef(null);
  const selectedImageIndexRef = useRef(null);

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textGroupRef = useRef(null);
  const progressRef = useRef(null);
  const modalRef = useRef(null);
  const scrollableRef = useRef(null);
  const hasInView = useRef(false);

  // Keep refs in sync with state
  useEffect(() => { currentIndexRef.current = currentIndex; }, [currentIndex]);
  useEffect(() => { isAnimatingRef.current = isAnimating; }, [isAnimating]);
  useEffect(() => { selectedProjectRef.current = selectedProject; }, [selectedProject]);
  useEffect(() => { selectedImageIndexRef.current = selectedImageIndex; }, [selectedImageIndex]);

  const projects = [
    {
      id: 1,
      title: "The Vyas",
      category: "Residential Architecture",
      location: "Adajan, Surat",
      area: "2,000 Sq. Ft.",
      year: "2025",
      description: "A meticulously crafted high-rise sanctuary that optimizes every architectural inch. This residence is defined by its seamless integration of bespoke materials and ambient lighting, creating a warm, editorial atmosphere for a modern family.",
      longDescription: "Spanning 2,000 square feet, The Vyas was envisioned as an elevated escape from the bustling city. The spatial flow was completely re-architected to allow natural light to cascade through the primary living areas, highlighting custom woodwork and curated contemporary art. Every detail, from the concealed intelligent storage solutions to the handpicked furnishings, was deliberately chosen to balance striking visual appeal with genuine liveability, reflecting the unique lifestyle and preferences of the homeowners.",
      mainImage: "/project1/1.jpg.jpeg",
      gallery: [
        "/project1/2.jpg.jpeg",
        "/project1/3.jpg.jpeg",
        "/project1/4.jpg.jpeg",
        "/project1/5.jpg.jpeg",
        "/project1/6.jpg.jpeg",
        "/project1/7.jpg.jpeg",
        "/project1/9.jpg.jpeg",
        "/project1/10.jpg.jpeg",
        "/project1/11.jpg.jpeg",
        "/project1/BQS_1566-Edit.jpg.jpeg"
      ]
    },
    {
      id: 2,
      title: "Baghban Lifestyle 4BHK",
      category: "Residential Project",
      location: "Pal, Surat",
      area: "2,400 Sq. Ft.",
      year: "2024",
      description: "A beautifully curated residential space that blends modern design with functional elegance. The layout maximizes natural light, while bespoke interiors provide a luxurious yet comfortable atmosphere for the entire family.",
      longDescription: "The Baghban Lifestyle 4BHK project required a delicate balance between open-plan grandeur and intimate family zones. By utilizing a sophisticated palette of neutral tones, rich wood textures, and refined metallic accents, we cultivated a sense of timeless elegance. The central living area serves as the heart of the home, featuring a custom-designed media wall that seamlessly blends into the architectural framework. High-end finishes and ambient lighting layers pull the entire design together into a cohesive, luxurious living experience.",
      mainImage: "/project2/7.jpeg",
      gallery: [
        "/project2/1.jpeg",
        "/project2/2.jpeg",
        "/project2/3.jpeg",
        "/project2/4.jpeg",
        "/project2/5.jpeg",
        "/project2/6.jpeg",
        "/project2/8.jpeg",
        "/project2/9.jpeg",
        "/project2/10.jpeg",
        "/project2/11.jpeg",
        "/project2/12.jpeg",
        "/project2/13.jpeg",
        "/project2/14.jpeg",
        "/project2/15.jpeg",
        "/project2/16.jpeg",
        "/project2/17.jpeg",
        "/project2/18.jpeg",
        "/project2/19.jpeg",
        "/project2/20.jpeg",
      ]
    },
    {
      // Images fixed — replaced broken Unsplash restaurant URLs
      id: 3,
      title: "Santvan Seron",
      category: "Commercial Spaces",
      location: "Piplod, Surat",
      area: "2,800 Sq. Ft.",
      year: "2024",
      description: "An exclusive culinary atmosphere designed with ambient lighting, rich upholstery, and acoustically treated sculptural ceilings, creating an unforgettable and intimate dining experience.",
      longDescription: "For Santvan Seron, the goal was to craft a commercial destination that felt profoundly immersive. We moved away from traditional layouts, instead sculpting a fluid environment defined by curved architectural features, moody ambient lighting layers, and plush, tactile seating. The design inherently guides patrons through a sensory journey, with carefully placed acoustic treatments disguised as art installations to ensure the atmosphere remains intimate and conversational even at full capacity.",
      mainImage: "/project3/1.jpeg",
      gallery: [
        "/project3/2.jpeg",
        "/project3/3.jpeg",
        "/project3/4.jpeg",
        "/project3/5.jpeg",
        "/project3/6.jpeg",
        "/project3/7.jpeg",
        "/project3/8.jpeg",
        "/project3/9.jpeg",
        "/project3/10.jpeg",
      ]
    }

  ];

  const currentProject = projects[currentIndex];

  // animateSlide reads ONLY from refs — no stale closure issues
  const animateSlide = (direction) => {
    if (isAnimatingRef.current || selectedProjectRef.current) return;

    isAnimatingRef.current = true;
    setIsAnimating(true);

    const idx = currentIndexRef.current;
    const len = projects.length;
    const nextIndex = direction === 'next'
      ? (idx === len - 1 ? 0 : idx + 1)
      : (idx === 0 ? len - 1 : idx - 1);

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false;
        setIsAnimating(false);
      }
    });

    tl.to(textGroupRef.current.children, {
      y: -30, opacity: 0, stagger: 0.05, duration: 0.4, ease: "power2.in"
    })
    .to(imageRef.current, {
      scale: 1.1, opacity: 0.4, filter: "blur(10px)", duration: 0.6, ease: "power2.inOut"
    }, "<");

    tl.call(() => {
      currentIndexRef.current = nextIndex;
      setCurrentIndex(nextIndex);
    });

    tl.set(textGroupRef.current.children, { y: 30, opacity: 0 });
    tl.set(imageRef.current, { scale: 1.2, filter: "blur(20px)", opacity: 0 });

    tl.to(imageRef.current, {
      scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "expo.out"
    })
    .to(textGroupRef.current.children, {
      y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out"
    }, "-=0.8");
  };

  // Store animateSlide in a ref so the progress timer can always call the latest version
  const animateSlideRef = useRef(animateSlide);
  useEffect(() => { animateSlideRef.current = animateSlide; });

  // Scroll reveal
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        onEnter: () => { hasInView.current = true; },
      }
    });
    tl.fromTo(".portfolio-header", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })
      .fromTo(".project-hero-visual", { scale: 1.1, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }, "-=0.5")
      .fromTo(textGroupRef.current.children, { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }, "-=1");
  }, []);

  // 5-second auto-advance progress bar — only starts once in view
  useEffect(() => {
    if (selectedProject) return;

    gsap.killTweensOf(progressRef.current);
    gsap.set(progressRef.current, { scaleX: 0 });

    const startTimer = () => {
      return gsap.to(progressRef.current, {
        scaleX: 1,
        duration: 5,
        ease: "none",
        onComplete: () => animateSlideRef.current('next') // always calls the latest version
      });
    };

    let anim;
    let trigger;

    if (hasInView.current) {
      anim = startTimer();
    } else {
      trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 60%",
        once: true,
        onEnter: () => {
          hasInView.current = true;
          anim = startTimer();
        }
      });
    }

    return () => {
      if (anim) anim.kill();
      if (trigger) trigger.kill();
    };
  }, [currentIndex, selectedProject]);

  const openProject = (project) => {
    setSelectedProject(project);
    selectedProjectRef.current = project;
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      if (scrollableRef.current) scrollableRef.current.scrollTop = 0;
    }, 0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    selectedProjectRef.current = null;
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction) => {
    if (selectedImageIndexRef.current === null || !selectedProjectRef.current) return;
    const gallery = selectedProjectRef.current.gallery;
    const len = gallery.length;
    const nextIdx = direction === 'next'
      ? (selectedImageIndexRef.current === len - 1 ? 0 : selectedImageIndexRef.current + 1)
      : (selectedImageIndexRef.current === 0 ? len - 1 : selectedImageIndexRef.current - 1);
    setSelectedImageIndex(nextIdx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // If lightbox is open, navigate gallery images
      if (selectedImageIndexRef.current !== null) {
        if (e.key === 'Escape') setSelectedImageIndex(null);
        if (e.key === 'ArrowLeft') navigateLightbox('prev');
        if (e.key === 'ArrowRight') navigateLightbox('next');
        return;
      }

      // If modal is open
      if (selectedProjectRef.current) {
        if (e.key === 'Escape') closeProject();
        return;
      }

      // Main slider navigation
      if (e.key === 'ArrowLeft') animateSlideRef.current('prev');
      if (e.key === 'ArrowRight') animateSlideRef.current('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Touch Handlers for swipe
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const touchEndX = useRef(null);
  const touchEndY = useRef(null);
  
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndX.current = null;
    touchEndY.current = null;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;
  };

  const handleTouchEndMain = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distanceX = touchStartX.current - touchEndX.current;
    const distanceY = touchStartY.current - (touchEndY.current || touchStartY.current);
    
    const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);
    if (isHorizontalSwipe && distanceX > 50) animateSlideRef.current('next');
    if (isHorizontalSwipe && distanceX < -50) animateSlideRef.current('prev');
    
    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
    touchEndY.current = null;
  };

  const handleTouchEndLightbox = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distanceX = touchStartX.current - touchEndX.current;
    const distanceY = touchStartY.current - (touchEndY.current || touchStartY.current);
    
    const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);
    if (isHorizontalSwipe && distanceX > 50) navigateLightbox('next');
    if (isHorizontalSwipe && distanceX < -50) navigateLightbox('prev');
    
    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
    touchEndY.current = null;
  };

  // ── JSX ──────────────────────────────────────────────────────────────────────

  const modalJSX = selectedProject && (
    <div className="p-modal-overlay" onClick={closeProject}>
      <div className="p-modal-content" onClick={(e) => e.stopPropagation()} ref={modalRef}>
        <button className="p-modal-close" onClick={closeProject}><FaTimes /></button>

        <div className="p-modal-scrollable" ref={scrollableRef}>
          <div className="p-modal-hero">
            <img src={selectedProject.mainImage} alt={selectedProject.title} />
            <div className="p-hero-fade">
              <div className="p-hero-content">
                <div className="p-hero-main-info">
                  <span className="p-modal-tag">{selectedProject.category}</span>
                  <h2 className="p-modal-title">{selectedProject.title}</h2>
                </div>
                
                <div className="p-modal-hero-specs">
                  <div className="hero-spec"><label>Location</label><span>{selectedProject.location}</span></div>
                  <div className="hero-spec"><label>Area</label><span>{selectedProject.area}</span></div>
                  <div className="hero-spec"><label>Year</label><span>{selectedProject.year}</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-modal-details-grid">
            <div className="p-modal-info">
              <div className="p-modal-long-desc">
                <h4>About the Project</h4>
                <p>{selectedProject.description}</p>
                <p>{selectedProject.longDescription}</p>
              </div>
            </div>

            <div className="p-modal-gallery">
              {selectedProject.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="p-gallery-item"
                  onClick={() => setSelectedImageIndex(idx)}
                >
                  <img src={img} alt={`${selectedProject.title} gallery ${idx}`} loading="lazy" />
                  <div className="img-hover-hint"><FaExpand /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-modal-footer">
            <p>&copy; {new Date().getFullYear()} Wings Design. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const lightboxJSX = (selectedImageIndex !== null && selectedProject) && (
    <div 
      className="p-lightbox" 
      onClick={() => setSelectedImageIndex(null)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEndLightbox}
    >
      <button className="lightbox-close" onClick={() => setSelectedImageIndex(null)}>
        <FaTimes />
      </button>

      <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}>
        <FaArrowLeft />
      </button>

      <div className="lightbox-image-container" onClick={(e) => e.stopPropagation()}>
        <img src={selectedProject.gallery[selectedImageIndex]} alt="Fullscreen View" />
      </div>

      <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}>
        <FaArrowRight />
      </button>

      <div className="lightbox-nav-hint">
        Use Arrows or Swipe to Navigate • {selectedImageIndex + 1} / {selectedProject.gallery.length}
      </div>
    </div>
  );

  return (
    <>
      <section className="portfolio-section" id="projects" ref={containerRef}>
        <div className="portfolio-bg-layer"></div>

        <div className="portfolio-container">
          <header className="portfolio-header">
            <span className="portfolio-label">Selected Works</span>
            <h2 className="portfolio-title">Signature Masterpieces</h2>
          </header>

          <div 
            className="portfolio-main-display"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEndMain}
          >
            <div className="project-hero-visual" onClick={() => openProject(currentProject)}>
              <div className="visual-inner">
                <img
                  ref={imageRef}
                  src={currentProject.mainImage}
                  alt={currentProject.title}
                  className="hero-image"
                />
                <div className="visual-overlay">
                  <div className="expand-indicator">
                    <FaExpand />
                    <span>View Project</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-info-panel">
              <div className="info-text-group" ref={textGroupRef}>
                <div className="project-metadata">
                  <span className="project-idx">0{currentIndex + 1} &mdash; 0{projects.length}</span>
                  <span className="project-tag">{currentProject.category}</span>
                </div>

                <h3 className="project-display-title">{currentProject.title}</h3>

                <div className="project-overview-stats">
                  <div className="p-stat"><FaMapMarkerAlt /><span>{currentProject.location}</span></div>
                  <div className="p-stat"><span>{currentProject.area}</span></div>
                </div>

                <p className="project-brief">{currentProject.description}</p>

                <button className="project-cta" onClick={() => openProject(currentProject)}>
                  Full Case Study <FaLongArrowAltRight />
                </button>
              </div>

              <div className="portfolio-navigation">
                <button className="nav-arrow prev" onClick={() => animateSlideRef.current('prev')} disabled={isAnimating}>
                  <FaArrowLeft />
                </button>
                <div className="nav-progress-wrapper">
                  <div className="portfolio-progress-fill" ref={progressRef}></div>
                </div>
                <button className="nav-arrow next" onClick={() => animateSlideRef.current('next')} disabled={isAnimating}>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {ReactDOM.createPortal(modalJSX, document.body)}
      {ReactDOM.createPortal(lightboxJSX, document.body)}
    </>
  );
};

export default Projects;
