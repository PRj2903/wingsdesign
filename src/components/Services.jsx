import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    number: '01',
    title: 'Curated Residential',
    description: 'Bespoke living experiences crafted for villas, penthouses, and refined private residences.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000'
  },
  {
    number: '02',
    title: 'Turnkey Solutions',
    description: 'Flawless design-to-delivery management. We handle everything from the first brick to the final cushion.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000'
  },
  {
    number: '03',
    title: 'Commercial Design',
    description: 'Transformative corporate environments that mirror high-end brand identities and visionary workspaces.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000'
  },
  {
    number: '04',
    title: '3D Visualization',
    description: 'Hyper-realistic cinematic renderings. Walk through your future home before the foundation is laid.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000'
  },
  {
    number: '05',
    title: 'Bespoke Furniture',
    description: 'One-of-a-kind statement pieces that bridge the gap between architectural art and function.',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000'
  },
  {
    number: '06',
    title: 'Landscape Mastery',
    description: 'Lush, architectural outdoor spaces designed to be a natural extension of your indoor luxury.',
    image: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=1000'
  }
];

const Services = () => {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    // 1. Path Drawing Animation (The Spring)
    const path = pathRef.current;
    if (path && typeof path.getTotalLength === 'function') {
      try {
        const length = path.getTotalLength();
        if (length && length > 0) {
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

          gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top 40%",
              end: "bottom 80%",
              scrub: 1,
            }
          });
        }
      } catch (err) {
        console.error("SVG Path error:", err);
      }
    }

    // 2. Individual Step Reveals
    const steps = gsap.utils.toArray('.spring-step');
    if (steps.length > 0) {
      steps.forEach((step, index) => {
        const isLeft = index % 2 === 0;
        const content = step.querySelector('.spring-content');
        const image = step.querySelector('.spring-image-box');
        const pin = step.querySelector('.spring-pin');

        if (content && image && pin) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: step,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          });

          tl.fromTo(pin, 
            { scale: 0, autoAlpha: 0 }, 
            { scale: 1, autoAlpha: 1, duration: 0.6, ease: "back.out(2)" }
          )
          .fromTo(content, 
            { x: isLeft ? -40 : 40, opacity: 0, filter: "blur(5px)" }, 
            { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }, 
            "-=0.4"
          )
          .fromTo(image, 
            { scale: 0.8, opacity: 0, rotation: isLeft ? 5 : -5 }, 
            { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: "power2.out" }, 
            "-=0.6"
          );
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section className="services-section" id="services" ref={sectionRef}>
      <div className="services-container">
        <div className="spring-header-container">
          <header className="services-header">
            <span className="spring-label">Expertise Journey</span>
            <h2 className="spring-main-title">Crafting Your Vision, <span className="gold-text">Like a Spring</span></h2>
            <div className="header-divider-gold"></div>
            {/* <p className="spring-subtitle">Experience a fluid, progressive reveal of our architectural specializations.</p> */}
          </header>
        </div>

        <div className="spring-wrapper" ref={triggerRef}>
          {/* Animated SVG Spring Path */}
          <svg className="spring-svg" viewBox="0 0 100 1200" preserveAspectRatio="none">
            <path 
              ref={pathRef}
              className="spring-path"
              d="M50,0 C90,100 10,200 50,300 C90,400 10,500 50,600 C90,700 10,800 50,900 C90,1000 10,1100 50,1200"
              fill="none" 
              stroke="#D4AF37" 
              strokeWidth="0.5"
            />
          </svg>

          <div className="spring-steps">
            {servicesData.map((service, index) => (
              <div key={index} className={`spring-step ${index % 2 === 0 ? 'left' : 'right'}`}>
                {/* Visual Connector Pin on the Spring */}
                <div className="spring-pin"></div>

                <div className="spring-flex-container">
                  <div className="spring-content">
                    <h3 className="step-name">{service.title}</h3>
                    <p className="step-text">{service.description}</p>
                    <div className="step-watermark-bg">{service.number}</div>
                  </div>
                  
                  <div className="spring-image-box">
                    <div className="image-reveal-wrapper">
                      <img src={service.image} alt={service.title} />
                      <div className="spring-image-overlay"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="spring-footer-journey">
            <button className="final-journey-btn" onClick={() => window.open('https://wa.me/917990207778', '_blank')}>
              <span className="btn-label">Begin Your Journey</span>
              <div className="btn-line"></div>
              <FaLongArrowAltRight className="btn-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
