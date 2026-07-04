import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface User {
  _id: string;
  name: string;
  email: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch('https://mrabuumatelephons.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await res.json().catch(() => ({ message: 'Server error (HTML instead of JSON)' }));
      
      if (res.ok) {
        setUser(data);
        localStorage.setItem('userInfo', JSON.stringify(data));
        return { success: true };
      }
      return { success: false, message: data.message || 'Login failed.' };
    } catch (error) {
      return { success: false, message: 'Network error or server is down.' };
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const res = await fetch('https://mrabuumatelephons.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      
      const data = await res.json().catch(() => ({ message: 'Server error (HTML instead of JSON)' }));
      
      if (res.ok) {
        setUser(data);
        localStorage.setItem('userInfo', JSON.stringify(data));
        return { success: true };
      }
      return { success: false, message: data.message || 'Registration failed.' };
    } catch (error) {
      return { success: false, message: 'Network error or server is down.' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userInfo');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
