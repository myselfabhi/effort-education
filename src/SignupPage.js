import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Signing up...');
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Sign up</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="block mb-4 p-2 border border-gray-400 rounded" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="block mb-4 p-2 border border-gray-400 rounded" />
      <button onClick={handleSignup} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Sign up</button>
      <p className="mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link></p>
    </div>
  );
};

export default SignupPage;
