import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero" id="nyumbani">
      <div className="hero-glow"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <span className="badge">Toleo Jipya 2026</span>
          <h1 className="hero-title">
            Gundua Ulimwengu wa <br />
            <span className="text-gradient">Simu Janja</span> za Kisasa
          </h1>
          <p className="hero-description">
            Pata simu zenye ubora wa hali ya juu, kasi isiyo na kifani, na kamera za kiwango cha kimataifa. Karibu MrabuuMatelephon.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Nunua Sasa</button>
            <button className="btn-secondary">Tazama Ofa</button>
          </div>
        </div>
        <div className="hero-image animate-fade-in delay-200">
          <div className="image-wrapper glass-panel">
            {/* We use a placeholder since we can't generate images easily here, but we will style it to look like a premium phone showcase */}
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="camera-notch"></div>
                <div className="screen-content">
                  <div className="time">12:00</div>
                  <div className="widgets"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
