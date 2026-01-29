import React from 'react';
import { Code2, Github, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <img src="/src/assets/logo.png" alt="Joe Tech Solutions" className="logo-image" />
                        <span className="logo-text">JoeTech<span className="highlight">Solutions</span></span>
                    </Link>
                    <p className="footer-desc">
                        Creating robust, scalable, and premium digital solutions for modern businesses.
                        Turning complex problems into elegant software.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Github"><Github size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/about">About Me</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <Mail size={16} />
                            <span>hello@joetechsolutions.com</span>
                        </li>
                        <li>
                            <Phone size={16} />
                            <span>+233 XX XXX XXXX</span>
                        </li>
                        <li>
                            <MapPin size={16} />
                            <span>Accra, Ghana</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {currentYear} JoeTech Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
