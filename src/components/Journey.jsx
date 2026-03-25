import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Journey.css';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: '2020',
    title: 'The Genesis',
    desc: 'Heenaa and Sanket collaborate on their first project, uniting vision and precision into a shared design philosophy.',
    icon: '✦'
  },
  {
    year: '2021',
    title: 'Spreading Wings',
    desc: 'Completion of the first 10 luxury residences, establishing a signature design language that blends warmth with modernity.',
    icon: '◈'
  },
  {
    year: '2022',
    title: 'The Surat Studio',
    desc: 'Opening of the flagship design studio — a dedicated hub for luxury interior consulting and premium material curation.',
    icon: '✧'
  },
  {
    year: '2023',
    title: 'Turnkey Excellence',
    desc: 'Achieving the milestone of 50+ bespoke masterpieces, refining our end-to-end turnkey delivery model.',
    icon: '❈'
  },
  {
    year: '2024',
    title: 'The Vision Ahead',
    desc: 'Pushing the boundaries of modern luxury, redefining spatial experiences with architectural grace and personal soul.',
    icon: '❖'
  }
];

const Journey = () => {
  const journeyRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal header
      gsap.fromTo('.journey-header', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.journey-header', start: 'top 85%' } }
      );

      // Animate the vertical line tracing down
      gsap.fromTo('.journey-line-fill',
        { height: '0%' },
        { height: '100%', ease: 'none',
          scrollTrigger: { 
            trigger: '.journey-content', 
            start: 'top 60%', 
            end: 'bottom 80%', 
            scrub: 1.5 
          } }
      );

      // Animate each milestone card
      const cards = gsap.utils.toArray('.milestone-card');
      cards.forEach((card, index) => {
        const isEven = index % 2 === 0;
        gsap.fromTo(card,
          { 
            x: isEven ? -60 : 60, 
            opacity: 0,
            scale: 0.95
          },
          { 
            x: 0, 
            opacity: 1, 
            scale: 1,
            duration: 0.8, 
            ease: 'power3.out',
            scrollTrigger: { 
              trigger: card, 
              start: 'top 85%',
              toggleActions: 'play none none none' 
            } 
          }
        );

        // Animate the icon pulse when reached
        const icon = card.querySelector('.milestone-icon');
        gsap.to(icon, {
          backgroundColor: '#C49A45',
          color: '#fff',
          borderColor: '#C49A45',
          duration: 0.4,
          scrollTrigger: {
            trigger: card,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        });
      });
    }, journeyRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="journey-section" id="journey" ref={journeyRef}>
      <div className="journey-container">
        
        <div className="journey-header">
          <span className="eyebrow">Our Evolution</span>
          <h2 className="section-display-title">The Journey of Wings</h2>
          <p className="section-lead">
            From a shared passion to a premier design studio — a timeline of milestones defined by craft and commitment.
          </p>
        </div>

        <div className="journey-content">
          {/* Central Line */}
          <div className="journey-line">
            <div className="journey-line-fill"></div>
          </div>

          <div className="milestones-list">
            {milestones.map((m, index) => (
              <div key={m.year} className={`milestone-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                
                {/* Visual marker */}
                <div className="milestone-marker">
                  <div className="milestone-icon">{m.icon}</div>
                </div>

                {/* Content Card */}
                <div className="milestone-card">
                  <div className="card-inner">
                    <span className="milestone-year">{m.year}</span>
                    <h3 className="milestone-title">{m.title}</h3>
                    <p className="milestone-desc">{m.desc}</p>
                    <div className="milestone-card-accent"></div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Journey;
