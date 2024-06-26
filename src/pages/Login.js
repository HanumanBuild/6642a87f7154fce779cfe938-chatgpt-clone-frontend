import React, { useState } from 'react';
import { login } from '../utils/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      // Handle successful login (e.g., store token, redirect)
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          placeholder="Password"
        />
        <button onClick={handleLogin} className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
      </div>
    </div>
  );
};

export default Login;
