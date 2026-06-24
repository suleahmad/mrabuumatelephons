import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="mawasiliano">
      <div className="container footer-content">
        <div className="footer-col">
          <div className="logo">
            <span className="logo-text">Mrabuu</span>
            <span className="logo-accent">Matelephon</span>
          </div>
          <p className="footer-desc">
            Duka namba moja la simu janja za kisasa. Tunakupa ubora, uaminifu na huduma bora.
          </p>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">Viungo Muhimu</h4>
          <ul className="footer-links">
            <li><a href="#nyumbani">Nyumbani</a></li>
            <li><a href="#bidhaa">Bidhaa Zetu</a></li>
            <li><a href="#">Sheria na Masharti</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-title">Wasiliana Nasi</h4>
          <ul className="footer-links">
            <li>Simu: +255 700 000 000</li>
            <li>Barua pepe: info@mrabuumatelephon.com</li>
            <li>Dar es Salaam, Tanzania</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 MrabuuMatelephon. Haki zote zimehifadhiwa.</p>
      </div>
    </footer>
  );
};

export default Footer;
