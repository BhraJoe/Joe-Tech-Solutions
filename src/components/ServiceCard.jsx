import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => {
    return (
        <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <div className="card-icon-wrapper">
                <Icon size={32} className="card-icon" />
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <Link to="/services" className="card-link">
                Learn more <ArrowRight size={16} />
            </Link>
        </motion.div>
    );
};

export default ServiceCard;
