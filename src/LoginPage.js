import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is already authenticated on component mount
  useEffect(() => {
    const storedAuthStatus = sessionStorage.getItem('isAuthenticated');
    if (storedAuthStatus && storedAuthStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    // Mock login logic for demonstration purposes
    const loggedIn = true; // Assume the user is successfully logged in

    if (loggedIn) {
      // Update the authentication status
      setIsAuthenticated(true);
      // Store the authentication status in session storage
      sessionStorage.setItem('isAuthenticated', 'true');
    } else {
      // Handle login failure
      console.log('Login failed');
    }
  };

  const handleLogout = () => {
    // Clear authentication status from session storage
    sessionStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    // Redirect to the study material page if authenticated
    return <Navigate to="/courses" />;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="block mb-4 p-2 border border-gray-400 rounded" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="block mb-4 p-2 border border-gray-400 rounded" />
      <button onClick={handleLogin} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
      <p className="mt-4">Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link></p>
    </div>
  );
};

export default LoginPage;