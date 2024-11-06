// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Ambil data user dari localStorage saat komponen di-mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3000/users');
      const users = await response.json();
      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        localStorage.setItem('user', JSON.stringify(user)); // Simpan user di localStorage
        setUser(user);
        setIsAuthenticated(true);
        return { success: true, user };
      } else {
        return { success: false, message: 'Invalid credentials' };
      }
    } catch (error) {
      console.error('Error logging in:', error);
      return { success: false, message: 'Error logging in' };
    }
  };

  const logout = () => {
    localStorage.removeItem('user'); // Hapus data user dari localStorage
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
