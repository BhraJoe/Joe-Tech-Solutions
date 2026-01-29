import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Layout, Terminal, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    const skills = [
        { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind/CSS", "Framer Motion"] },
        { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"] },
        { category: "Tools & DevOps", items: ["Git", "Docker", "AWS", "Vercel", "CI/CD"] }
    ];

    return (
        <motion.div
            className="about-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* UNIFIED HERO SECTION (Background Image Mode) */}
            <section className="about-hero-section">
                <div className="container about-container">
                    <motion.div
                        className="about-content-centered"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>About <span className="text-gradient">Joe</span></h1>
                        <p className="hero-tagline">Software Engineer. Creative Problem Solver. Tech Strategist.</p>

                        <div className="about-bio-text">
                            <p>
                                I'm Joe, a passionate Software Engineer based in Ghana with a global mindset.
                                I founded JoeTech Solutions with a singular mission: to bridge the gap between complex technology
                                and real-world business needs.
                            </p>
                            <p>
                                With a background in full-stack development, I don't just write code; I architect solutions.
                                Whether it's a high-performance marketing site or a complex web application, I bring
                                engineering rigor and creative flair to every project.
                            </p>
                        </div>

                        <div className="about-stats-row">
                            <div className="stat">
                                <span className="stat-num">5+</span>
                                <span className="stat-label">Years Exp.</span>
                            </div>
                            <div className="stat-divider-vertical"></div>
                            <div className="stat">
                                <span className="stat-num">100%</span>
                                <span className="stat-label">Client Satisfaction</span>
                            </div>
                        </div>

                        <div className="signature">
                            <p>- Joe</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="section skills-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Technical Arsenal</h2>
                        <p>The tools I use to bring ideas to life.</p>
                    </div>
                    <div className="skills-grid">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                className="skill-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3>{skillGroup.category}</h3>
                                <div className="skill-tags">
                                    {skillGroup.items.map(item => (
                                        <span key={item} className="skill-tag">{item}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Check out my work</h2>
                        <p>See how I've helped others succeed.</p>
                        <Link to="/portfolio" className="btn-primary">
                            View Portfolio
                        </Link>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default About;
