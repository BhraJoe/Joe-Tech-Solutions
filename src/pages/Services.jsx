import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, LineChart, ShieldCheck, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: Globe,
            title: "Web Development",
            description: "High-performance websites that leave a lasting impression.",
            features: ["Custom React/Next.js Sites", "CMS Integration", "Responsive Design", "SEO Optimization"]
        },
        {
            icon: Smartphone,
            title: "Web Applications",
            description: "Complex functionality wrapped in simple, intuitive interfaces.",
            features: ["SaaS Platforms", "Dashboards & Portals", "API Integration", "Real-time Features"]
        },
        {
            icon: LineChart,
            title: "Tech Consulting",
            description: "Reviewing your tech stack and strategy to ensure growth.",
            features: ["Architecture Review", "Performance Audits", "Digital Transformation", "Technical Hiring Support"]
        }
    ];

    const process = [
        { step: "01", title: "Discovery", desc: "Understanding your business goals and requirements." },
        { step: "02", title: "Strategy", desc: "Planning the technical architecture and design direction." },
        { step: "03", title: "Development", desc: "Building with clean, efficient, and scalable code." },
        { step: "04", title: "Launch", desc: "Testing, deployment, and post-launch support." }
    ];

    return (
        <motion.div
            className="services-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="services-hero-section">
                <div className="container">
                    <motion.div
                        className="hero-content-centered"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Our <span className="text-gradient">Services</span></h1>
                        <p className="hero-tagline">Comprehensive Technical Solutions</p>
                        <p className="hero-description">
                            Engineering forward-thinking digital experiences that drive business growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section services-list-section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="service-icon-wrapper">
                                    <service.icon size={32} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <ul className="service-feature-list">
                                    {service.features.map(feature => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section process-section">
                <div className="container">
                    <div className="section-header">
                        <h2>How We Work</h2>
                        <p>A proven process for delivering excellence.</p>
                    </div>
                    <div className="process-grid">
                        {process.map((p, index) => (
                            <div key={index} className="process-step">
                                <span className="step-number">{p.step}</span>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Have a project in mind?</h2>
                        <Link to="/contact" className="btn-primary">
                            Discuss Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Services;
