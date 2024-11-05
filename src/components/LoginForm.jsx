import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LoginForm = ({ onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  return (
    <form className="auth_form">
      <h2 className="auth_title">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="auth_input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="auth_input"
      />
      <button type="submit" className="auth_button">Login</button>
      <p className="auth_switchText">
        Don't have an account? 
        <span onClick={onSwitchToRegister} className="auth_switchLink">Register</span>
      </p>
    </form>
  );
};

export default LoginForm;
