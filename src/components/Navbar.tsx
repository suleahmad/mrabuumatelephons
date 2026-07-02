import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Navbar.css';

interface NavbarProps {
  onOpenAuthModal?: (mode: 'login' | 'signup') => void;
  onOpenCart?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAuthModal, onOpenCart }) => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  
  return (
    <nav className="navbar glass-panel">
      <div className="container navbar-content">
        <a href="/" className="logo">
          <img src="/mrabuu_logo.png" alt="Mrabuu Matelephon Logo" className="logo-img" />
        </a>
        
        <div className="search-bar">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" placeholder="Tafuta simu..." />
        </div>

        <ul className="nav-links">
          <li><a href="#nyumbani">Nyumbani</a></li>
          <li><a href="#bidhaa">Bidhaa</a></li>
        </ul>

        <div className="nav-actions">
          {user ? (
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
              <span style={{color: 'white', fontWeight: 'bold'}}>Habari, {user.name.split(' ')[0]}</span>
              <button className="btn-text" onClick={logout}>Toka</button>
            </div>
          ) : (
            <>
              <button className="btn-text" onClick={() => onOpenAuthModal?.('login')}>Ingia</button>
              <button className="btn-primary-small" onClick={() => onOpenAuthModal?.('signup')}>Jisajili</button>
            </>
          )}
          <button className="cart-btn" onClick={onOpenCart}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cart-badge">{cartItems.length}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
