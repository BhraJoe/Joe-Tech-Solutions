import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="loading-container">
            <div className="loader">
                <div className="loader-ring"></div>
                <div className="loader-logo">J</div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
