import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Folder, Filter } from 'lucide-react';
import './Portfolio.css';

// Import images
import projectFintech from '../assets/project-fintech.png';
import projectEcommerce from '../assets/project-ecommerce.png';
import projectHealth from '../assets/project-health.png';
import projectBanking from '../assets/project-banking.png';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            id: 1,
            title: "FinTech Dashboard",
            category: "Fintech",
            description: "A comprehensive financial analytics dashboard handling real-time data visualization and transaction processing.",
            tags: ["React", "D3.js", "Node.js"],
            image: projectFintech,
            link: "#",
            featured: true
        },
        {
            id: 2,
            title: "E-Commerce Platform",
            category: "E-commerce",
            description: "Full-stack e-commerce solution with custom cart logic, payment gateway integration, and admin panel.",
            tags: ["Next.js", "Stripe", "PostgreSQL"],
            image: projectEcommerce,
            link: "#",
            featured: false
        },
        {
            id: 3,
            title: "HealthTech Mobile App",
            category: "Mobile",
            description: "Patient management system with appointment scheduling and telemedicine features.",
            tags: ["React Native", "Firebase", "Redux"],
            image: projectHealth,
            link: "#",
            featured: false
        },
        {
            id: 4,
            title: "Corporate Banking Portal",
            category: "Fintech",
            description: "Secure enterprise portal for corporate clients to manage assets and liquidity.",
            tags: ["TypeScript", "React", "Java Spring"],
            image: projectBanking,
            link: "#",
            featured: false
        }
    ];

    const categories = ["All", "Fintech", "E-commerce", "Mobile"];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    const featuredProject = projects.find(p => p.featured);

    return (
        <motion.div
            className="portfolio-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="portfolio-hero-section">
                <div className="container">
                    <motion.div
                        className="hero-content-centered"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Selected <span className="text-gradient">Works</span></h1>
                        <p className="hero-tagline">Innovation in every pixel</p>
                        <p className="hero-description">
                            A curated selection of projects that demonstrate our ability to solve complex problems with elegant code.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Project Section */}
            {filter === 'All' && featuredProject && (
                <section className="section featured-section">
                    <div className="container">
                        <div className="section-label">Featured Project</div>
                        <motion.div
                            className="featured-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="featured-image">
                                <img src={featuredProject.image} alt={featuredProject.title} loading="eager" />
                            </div>
                            <div className="featured-content">
                                <div className="featured-badge">{featuredProject.category}</div>
                                <h2>{featuredProject.title}</h2>
                                <p>{featuredProject.description}</p>
                                <div className="project-tags">
                                    {featuredProject.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="featured-links">
                                    <a href={featuredProject.link} className="btn-primary">View Case Study</a>
                                    <a href={featuredProject.link} className="btn-outline">Live Demo</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            <section className="section portfolio-section">
                <div className="container">
                    {/* Filter Tabs */}
                    <div className="filter-tabs">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <motion.div layout className="portfolio-grid">
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    key={project.id}
                                    className="project-card"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="project-image-wrapper">
                                        <img src={project.image} alt={project.title} loading="lazy" />
                                        <div className="project-overlay">
                                            <div className="project-links">
                                                <a href={project.link} aria-label="Github"><Github size={24} /></a>
                                                <a href={project.link} aria-label="Live Demo"><ExternalLink size={24} /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-content">
                                        <div className="project-header">
                                            <span className="category-tag">{project.category}</span>
                                            <h3>{project.title}</h3>
                                        </div>
                                        <p>{project.description}</p>
                                        <div className="project-tags">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Portfolio;
