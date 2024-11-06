import React, { useState } from 'react';
import '../App.css';

const RegisterForm = ({ onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      // Cek apakah email sudah digunakan
      const checkResponse = await fetch('http://localhost:5000/users');
      const users = await checkResponse.json();
      const existingUser = users.find(user => user.email === email);

      if (existingUser) {
        alert('Email is already registered!');
        return;
      }

      // Input data baru ke db.json
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        alert('Registration successful');
        onSwitchToLogin(); // Mengalihkan ke form login setelah pendaftaran berhasil
      } else {
        alert('Failed to register');
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth_form">
      <h2 className="auth_title">Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="auth_input"
      />
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        className="auth_input"
      />
      <button type="submit" className="auth_button">Register</button>
      <p className="auth_switchText">
        Already have an account? 
        <span onClick={onSwitchToLogin} className="auth_switchLink">Login</span>
      </p>
    </form>
  );
};

export default RegisterForm;
