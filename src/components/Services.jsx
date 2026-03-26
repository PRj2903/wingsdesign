import React, { useEffect, useRef } from 'react';
import './Services.css';

const servicesData = [
  {
    number: '01',
    title: 'Curated Residential',
    description: 'Bespoke living experiences crafted for villas, penthouses, and refined private residences.',
    features: ['Architectural Visualization', 'Global Sourcing', 'Custom Millwork'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21H21M5 21V8L12 3L19 8V21M9 21V14H15V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bgGlimpse: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    number: '02',
    title: 'Turnkey Solutions',
    description: 'Flawless design-to-delivery management, ensuring a seamless journey from blueprint to reality.',
    features: ['Project Management', 'Structural Audits', 'Vendor Integration'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bgGlimpse: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop'
  },
  {
    number: '03',
    title: 'Commercial Design',
    description: 'Transformative corporate environments that mirror high-end brand identities and visionary workspaces.',
    features: ['Corporate Branding', 'Ergonomic Luxury', 'Sustainable Tech'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 21V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21M3 21H21M9 7H10M9 11H10M9 15H10M14 7H15M14 11H15M14 15H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bgGlimpse: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    number: '04',
    title: '3D Visualization',
    description: 'Hyper-realistic cinematic renderings that allow you to walk through your future home before it exists.',
    features: ['VR Walkthroughs', 'Lighting Simulation', 'Material Accuracy'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16V8L12 3L3 8V16L12 21L21 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 8L12 13L21 8M12 21V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bgGlimpse: 'https://images.unsplash.com/photo-1541888941259-792739460272?q=80&w=1000&auto=format&fit=crop'
  },
  {
    number: '05',
    title: 'Bespoke Furniture',
    description: 'One-of-a-kind statement pieces that bridge the gap between architectural art and utilitarian function.',
    features: ['Hand-Carved Veneers', 'Exclusive Fabrics', 'Signature Metals'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 18V6H12M4 10H12M20 18V12C20 10.8954 19.1046 10 18 10H12M12 10V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bgGlimpse: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop'
  },
  {
    number: '06',
    title: 'Landscape Mastery',
    description: 'Lush, architectural outdoor spaces designed to be a natural extension of your indoor luxury.',
    features: ['Zen Gardens', 'Infinity Poolscapes', 'Sculptural Lighting'],
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L4 9V21H20V9L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 11V15M9 13H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    bgGlimpse: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=1000&auto=format&fit=crop'
  }
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('services-revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('footer'); // or wherever contact is
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="services-section" id="services" ref={sectionRef}>
      {/* Background Depth Elements */}
      <div className="services-bg-texture"></div>
      <div className="services-bg-gradient"></div>
      
      <div className="services-container">
        <header className="services-header">
          <div className="services-label stagger-1">Signature Expertise</div>
          <h2 className="services-title stagger-2">Curating <span className="gold-text">Timeless Environments</span></h2>
          <div className="header-line stagger-3"></div>
        </header>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={`service-card stagger-${index + 1}`}
            >
              <div className="card-glimpse" style={{ backgroundImage: `url(${service.bgGlimpse})` }}></div>
              <div className="service-number-watermark">{service.number}</div>
              
              <div className="service-card-content">
                <div className="service-icon-box">
                  {service.icon}
                </div>
                
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
                
                <ul className="service-feature-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="gold-dot"></span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-border-glow"></div>
            </div>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="services-ctas stagger-8">
          <button className="cta-button primary-cta" onClick={() => window.location.href="#projects"}>
            Experience Our Portfolio
          </button>
          <button 
            className="cta-button secondary-cta" 
            onClick={() => window.open('https://wa.me/917990207778', '_blank')}
          >
            Request Private Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
