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
            <section className="page-hero">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        My <span className="text-gradient">Services</span>
                    </motion.h1>
                    <p className="page-subtitle">
                        Comprehensive technical solutions for forward-thinking businesses.
                    </p>
                </div>
            </section>

            <section className="section services-list-section">
                <div className="container">
                    <div className="services-detailed-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="service-detail-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="service-icon-lg">
                                    <service.icon size={40} />
                                </div>
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <ul className="service-features">
                                        {service.features.map(feature => (
                                            <li key={feature}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
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
