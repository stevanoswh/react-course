import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import '../App.css';

const AuthPage = () => {
  const [isLoginView, setIsLoginView] = useState(true);

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
