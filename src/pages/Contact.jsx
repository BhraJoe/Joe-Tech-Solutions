import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for form submission logic
        alert('Thank you! This is a demo form. In a real app, this would send an email.');
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <motion.div
            className="contact-page"
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
                        Get in <span className="text-gradient">Touch</span>
                    </motion.h1>
                    <p className="page-subtitle">
                        Ready to start your next project? Let's talk.
                    </p>
                </div>
            </section>

            <section className="section contact-section">
                <div className="container contact-container">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="status-indicator-box">
                            <span className="status-dot pulse"></span>
                            <span className="status-text">Available for new projects</span>
                        </div>

                        <h2>Contact Information</h2>
                        <p className="contact-intro">
                            Fill out the form or contact me directly via the channels below.
                            I'm open for freelance projects and consulting.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="icon-box"><Mail size={20} /></div>
                                <div>
                                    <h3>Email</h3>
                                    <p>hello@joetechsolutions.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon-box"><Phone size={20} /></div>
                                <div>
                                    <h3>Phone</h3>
                                    <p>+233 XX XXX XXXX</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="icon-box"><MapPin size={20} /></div>
                                <div>
                                    <h3>Location</h3>
                                    <p>Accra, Ghana</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Project Inquiry"
                                    value={formState.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-primary w-full">
                                Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;
