import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import '../App.css';

const AuthPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect user jika sudah login
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="auth_container">
      {isLoginView ? (
        <LoginForm onSwitchToRegister={() => setIsLoginView(false)} />
      ) : (
        <RegisterForm onSwitchToLogin={() => setIsLoginView(true)} />
      )}
    </div>
  );
};

export default AuthPage;
