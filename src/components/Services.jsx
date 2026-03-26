import React from 'react';
import './Services.css';

const Services = () => {
    const serviceList = [
        {
            number: '01',
            title: 'Residential Interior',
            description: 'Customized designs for villas, penthouses, and luxury apartments that reflect your unique lifestyle.',
            features: ['Luxury Living & Dining', 'Designer Bedrooms', 'Modular Kitchens', 'Smart Home Setup'],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
            )
        },
        {
            number: '02',
            title: 'Commercial Spaces',
            description: "Inspiring environments that boost productivity and resonate with your brand's unique corporate identity.",
            features: ['Modern Office Layouts', 'High-end Retail Outlets', 'Boutique Hotels', 'Restaurant Interiors'],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
            )
        },
        {
            number: '03',
            title: 'Turnkey Solutions',
            description: 'Seamless "Design to Delivery" project management ensuring a stress-free experience for our premium clients.',
            features: ['Execution & Supervision', 'Material Procurement', 'Vendor Coordination', 'Quality Assurance'],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
            )
        },
        {
            number: '04',
            title: '3D Visualization',
            description: 'Advanced photorealistic renderings and VR tours that allow you to step into your space before construction.',
            features: ['4K Photorealistic Views', 'VR Walkthrough Tours', '3D Floor Planning', 'Lighting Simulation'],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
            )
        },
        {
            number: '05',
            title: 'Custom Furniture',
            description: 'Bespoke artisanal pieces crafted to perfectly complement the aesthetics of your interior design.',
            features: ['Custom Upholstery', 'Premium Woodwork', 'Signature Designs', 'Ergonomic Excellence'],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 2v20"></path>
                    <path d="M20 2v20"></path>
                    <path d="M2 13h20"></path>
                    <path d="M7 2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7z"></path>
                </svg>
            )
        },
        {
            number: '06',
            title: 'Landscape Design',
            description: 'Integrating nature with luxury architecture through elegant terrace gardens and landscape features.',
            features: ['Terrace Architecture', 'Water Features', 'Mood Lighting', 'Green Lounging'],
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v19"></path>
                    <path d="M5 20c0-1.66 2-3 2-3s2 1.34 2 3"></path>
                    <path d="M15 20c0-1.66 2-3 2-3s2 1.34 2 3"></path>
                    <path d="M5 14c0-1.66 2-3 2-3s2 1.34 2 3"></path>
                    <path d="M15 14c0-1.66 2-3 2-3s2 1.34 2 3"></path>
                    <path d="M5 8c0-1.66 2-3 2-3s2 1.34 2 3"></path>
                    <path d="M15 8c0-1.66 2-3 2-3s2 1.34 2 3"></path>
                </svg>
            )
        }
    ];

    return (
        <section className="services-section" id="services">
            <div className="services-container">
                <div className="services-header">
                    <span className="services-badge">What We Offer</span>
                    <h2 className="services-title">Bespoke <span>Interior</span> Specialization</h2>
                    <p className="services-subtitle">
                        From initial concept to luxury completion, we provide a full spectrum of design and execution services tailored to your highest aspirations.
                    </p>
                </div>

                <div className="services-grid">
                    {serviceList.map((service, index) => (
                        <div className="service-card" key={index}>
                            <span className="service-num-decor">{service.number}</span>
                            <div className="service-icon-box">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <ul className="service-features-grid">
                                {service.features.map((feature, fIndex) => (
                                    <li key={fIndex}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
