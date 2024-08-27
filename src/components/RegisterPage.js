// src/components/RegisterPage.js
import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext'; // Ensure correct import

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    // On successful registration, call login
    login('userRole'); // Replace 'userRole' with actual role if applicable
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
};

export default RegisterPage;
