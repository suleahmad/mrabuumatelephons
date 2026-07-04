import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero" id="nyumbani">
      <div className="hero-glow"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <span className="badge">New Edition 2026</span>
          <h1 className="hero-title">
            Discover the World of <br />
            <span className="text-gradient">Modern Smartphones</span>
          </h1>
          <p className="hero-description">
            Get high-quality phones, unparalleled speed, and world-class cameras. Welcome to MrabuuMatelephon.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Shop Now</button>
            <button className="btn-secondary">View Offers</button>
          </div>
        </div>
        <div className="hero-image animate-fade-in delay-200">
          <div className="image-wrapper glass-panel">
            {/* We use a placeholder since we can't generate images easily here, but we will style it to look like a premium phone showcase */}
            <img src="/hero_phones.png" alt="Modern Smartphones" className="hero-mockup-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
