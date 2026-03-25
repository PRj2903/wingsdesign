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
  const [selectedImage, setSelectedImage] = useState(null);

  // Refs for reading latest values inside GSAP callbacks (avoids stale closures)
  const currentIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const selectedProjectRef = useRef(null);

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

  const projects = [
    {
      id: 1,
      title: "The Elysian Penthouse",
      category: "Residential Architecture",
      location: "Vesu, Surat",
      area: "4,500 Sq. Ft.",
      year: "2023",
      description: "A breathtaking high-rise sanctuary bathed in natural light, featuring bespoke joinery, curated art pieces, and panoramic city views. Every inch is crafted to exude refined modern luxury.",
      mainImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=90",
      gallery: [
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171eb3239a?w=1200&q=80",
      ]
    },
    {
      id: 2,
      title: "Aura Villa Estate",
      category: "Luxury Turnkey",
      location: "Adajan, Surat",
      area: "8,200 Sq. Ft.",
      year: "2022",
      description: "A seamless blend of indoor and outdoor living. This vast estate embraces earthy tones, organic textures, and premium metallic accents to create a tranquil, resort-like atmosphere.",
      mainImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=90",
      gallery: [
        "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=1200&q=80",
        "https://images.unsplash.com/photo-1617806118233-ef85a070a286?w=1200&q=80",
        "https://images.unsplash.com/photo-1616489953149-92b490799684?w=1200&q=80",
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&q=80",
      ]
    },
    {
      // Images fixed — replaced broken Unsplash restaurant URLs
      id: 3,
      title: "Lumiere Dining Suite",
      category: "Commercial Spaces",
      location: "Piplod, Surat",
      area: "2,800 Sq. Ft.",
      year: "2024",
      description: "An exclusive culinary atmosphere designed with ambient lighting, rich upholstery, and acoustically treated sculptural ceilings, creating an unforgettable and intimate dining experience.",
      mainImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=90",
      gallery: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
        "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1200&q=80",
        "https://images.unsplash.com/photo-1552566626-52f8b828329e?w=1200&q=80",
        "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=80",
      ]
    },
    {
      id: 4,
      title: "Velvet Executive Hub",
      category: "Office Interiors",
      location: "Varacha, Surat",
      area: "3,500 Sq. Ft.",
      year: "2023",
      description: "A workspace that prioritizes both productivity and prestige. Designed with dark oak, deep leather accents, and integrated smart technology for the modern visionary.",
      mainImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=90",
      gallery: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
        "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=80",
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProjectRef.current) {
        if (e.key === 'Escape') closeProject();
        return;
      }
      if (e.key === 'ArrowLeft') animateSlideRef.current('prev');
      if (e.key === 'ArrowRight') animateSlideRef.current('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
                <span className="p-modal-tag">{selectedProject.category}</span>
                <h2 className="p-modal-title">{selectedProject.title}</h2>
              </div>
            </div>
          </div>

          <div className="p-modal-details-grid">
            <div className="p-modal-info">
              <div className="spec-row">
                <div className="spec-box"><label>Location</label><p>{selectedProject.location}</p></div>
                <div className="spec-box"><label>Area</label><p>{selectedProject.area}</p></div>
                <div className="spec-box"><label>Year</label><p>{selectedProject.year}</p></div>
              </div>
              <div className="p-modal-long-desc">
                <h4>About the Project</h4>
                <p>{selectedProject.description}</p>
                <p>Designed by the Principal Architects at Wings Design, this project reflects our commitment to creating spaces that are not just visually stunning but deeply personal. Our holistic approach ensures that architectural precision meets everyday comfort.</p>
              </div>
            </div>

            <div className="p-modal-gallery">
              {selectedProject.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className={`p-gallery-item ${idx % 3 === 0 ? 'span-2' : ''}`}
                  onClick={() => setSelectedImage(img)}
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

  const lightboxJSX = selectedImage && (
    <div className="p-lightbox" onClick={() => setSelectedImage(null)}>
      <button className="lightbox-close"><FaTimes /></button>
      <img src={selectedImage} alt="Fullscreen View" />
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

          <div className="portfolio-main-display">
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
                  <div className="progress-fill" ref={progressRef}></div>
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
