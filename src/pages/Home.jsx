import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Monitor, Rocket, CheckCircle, MousePointer2, Shield, Zap, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <motion.div
            className="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="container hero-container">
                    <motion.div
                        className="hero-content"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span className="hero-badge" variants={itemVariants}>
                            <span className="pulse-dot"></span> Available for new projects
                        </motion.span>
                        <motion.h1 variants={itemVariants}>
                            Building <span className="text-gradient">Digital Excellence</span> for Modern Businesses.
                        </motion.h1>
                        <motion.p className="hero-subtitle" variants={itemVariants}>
                            We are JoeTech Solutions. A team of Software Engineers and Creative Technologists. We build premium web applications and digital solutions that scale.
                        </motion.p>
                        <motion.div className="hero-cta" variants={itemVariants}>
                            <Link to="/contact" className="btn-primary btn-lg">
                                Start a Project
                            </Link>
                            <Link to="/portfolio" className="btn-outline btn-lg">
                                View Work
                            </Link>
                        </motion.div>

                        <motion.div
                            className="hero-stats"
                            variants={itemVariants}
                        >
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Years Exp.</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">20+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                        </motion.div>
                    </motion.div>



                    <motion.div
                        className="scroll-indicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        <div className="mouse">
                            <div className="wheel"></div>
                        </div>
                        <span>Scroll</span>
                    </motion.div>
                </div>
            </section>

            {/* SERVICES PREVIEW */}
            <section className="section services-preview">
                <div className="container">
                    <div className="section-header">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Our Expertise
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            High-touch solutions for ambitious brands.
                        </motion.p>
                    </div>
                    <div className="services-grid">
                        <ServiceCard
                            icon={Monitor}
                            title="Web Development"
                            description="Custom, high-performance websites built with modern technologies like React and Next.js."
                            delay={0.1}
                        />
                        <ServiceCard
                            icon={Code}
                            title="Software Solutions"
                            description="Robust, scalable software tailored to your specific business operations and needs."
                            delay={0.2}
                        />
                        <ServiceCard
                            icon={Rocket}
                            title="Digital Consulting"
                            description="Strategic technical advice to help your startup or business navigate the digital landscape."
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US - UPGRADED */}
            <section className="section why-us-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why JoeTech Solutions?</h2>
                        <p>It's not just about code. It's about solving real problems.</p>
                    </div>

                    <div className="features-grid">
                        <motion.div
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="feature-icon"><Zap size={28} /></div>
                            <h3>Performance First</h3>
                            <p>Blazing fast load times and optimized core web vitals for maximum conversion.</p>
                        </motion.div>

                        <motion.div
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="feature-icon"><Layout size={28} /></div>
                            <h3>Mobile Adaptive</h3>
                            <p>Designs that flow seamlessly across every device, from 4K desktops to smartphones.</p>
                        </motion.div>

                        <motion.div
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="feature-icon"><Shield size={28} /></div>
                            <h3>Enterprise Logic</h3>
                            <p>Robust architecture and clean code that scales with your business needs.</p>
                        </motion.div>

                        <motion.div
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="feature-icon"><CheckCircle size={28} /></div>
                            <h3>Reliable Delivery</h3>
                            <p>Transparent communication and on-time delivery. No ghosting, no excuses.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-box">
                        <h2>Ready to elevate your online presence?</h2>
                        <p>Let's turn your vision into a high-performing reality.</p>
                        <Link to="/contact" className="btn-primary btn-lg">
                            Get in Touch <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
