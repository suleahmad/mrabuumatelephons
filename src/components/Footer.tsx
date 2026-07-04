import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="mawasiliano">
      <div className="container footer-content">
        <div className="footer-col">
          <div className="logo">
            <img src="/mrabuu_logo.png" alt="Mrabuu Matelephon Logo" className="logo-img" />
          </div>
          <p className="footer-desc">
            The number one store for modern smartphones. We provide quality, reliability, and excellent service.
          </p>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#nyumbani">Home</a></li>
            <li><a href="#bidhaa">Our Products</a></li>
            <li><a href="#">Terms and Conditions</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">Contact Us</h4>
          <ul className="footer-links">
            <li>Phone/WhatsApp: 0773068054 / 0676868054</li>
            <li>Email: sulehamas611@gmail.com</li>
            <li>Magari 7 Mbezi Stendi ya Magufuli</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 MrabuuMatelephon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
