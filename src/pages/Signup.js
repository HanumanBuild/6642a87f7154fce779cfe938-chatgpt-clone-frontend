import React, { useState } from 'react';
import { signup } from '../utils/api';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await signup(email, password);
      // Handle successful signup (e.g., redirect to login)
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
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
        <button onClick={handleSignup} className="w-full p-2 bg-blue-500 text-white rounded">Signup</button>
      </div>
    </div>
  );
};

export default Signup;
