import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './AuthModal.css';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode: 'login' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialMode }) => {
  const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, register } = useAuth();

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

        <form className="auth-form" onSubmit={async (e) => { 
          e.preventDefault(); 
          setError('');
          setLoading(true);
          let res;
          if (mode === 'signup') {
            res = await register(name, email, password);
          } else {
            res = await login(email, password);
          }
          setLoading(false);
          if (res.success) {
            onClose();
          } else {
            setError(res.message || 'Imeleta hitilafu. Jaribu tena.');
          }
        }}>
          {error && <div style={{color: '#ff4d4f', marginBottom: '10px', fontSize: '0.9rem', textAlign: 'center'}}>{error}</div>}
          {mode === 'signup' && (
            <div className="form-group">
              <label>Jina Kamili</label>
              <input type="text" placeholder="Mf. Ali Juma" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
          )}
          
          <div className="form-group">
            <label>Barua Pepe</label>
            <input type="email" placeholder="mfano@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          
          <div className="form-group">
            <label>Nywila (Password)</label>
            <div className="password-input-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="********" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <button 
                type="button" 
                className="password-toggle-btn" 
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button type="submit" className="btn-primary w-full mt-2" disabled={loading}>
            {loading ? 'Inapakia...' : (mode === 'login' ? 'Ingia' : 'Jisajili')}
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
