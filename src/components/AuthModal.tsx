import React, { useState } from 'react';
import './AuthModal.css';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: 'login' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode }) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);

  // Update mode if initialMode changes
  React.useEffect(() => {
    setMode(initialMode);
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="auth-backdrop animate-fade-in" onClick={handleBackdropClick}>
      <div className="auth-modal glass-panel">
        <button className="close-btn" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="auth-header text-center">
          <h2 className="auth-title">
            {mode === 'login' ? 'Karibu Tena!' : 'Jiunge Nasi'}
          </h2>
          <p className="auth-subtitle">
            {mode === 'login' 
              ? 'Ingiza taarifa zako ili kuendelea' 
              : 'Tengeneza akaunti yako sasa'}
          </p>
        </div>

        <form className="auth-form" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          {mode === 'signup' && (
            <div className="form-group">
              <label>Jina Kamili</label>
              <input type="text" placeholder="Mf. Ali Juma" required />
            </div>
          )}
          
          <div className="form-group">
            <label>Barua Pepe</label>
            <input type="email" placeholder="mfano@email.com" required />
          </div>
          
          <div className="form-group">
            <label>Nywila (Password)</label>
            <input type="password" placeholder="********" required />
          </div>

          <button type="submit" className="btn-primary w-full mt-2">
            {mode === 'login' ? 'Ingia' : 'Jisajili'}
          </button>
        </form>

        <div className="auth-footer">
          {mode === 'login' ? (
            <p>Huna akaunti? <span className="auth-link" onClick={() => setMode('signup')}>Jisajili Hapa</span></p>
          ) : (
            <p>Una akaunti tayari? <span className="auth-link" onClick={() => setMode('login')}>Ingia Hapa</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
