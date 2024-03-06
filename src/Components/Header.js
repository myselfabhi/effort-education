import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left-aligned components (Navigation links) */}
        <nav className="flex">
          <ul className="flex">
            <li className="mr-6">
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li className="mr-6">
              <Link to="/courses" className="hover:text-gray-300">Courses</Link>
            </li>
            <li className="mr-6">
              <Link to="/about" className="hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Center-aligned logo (Site title) */}
        <div className="text-2xl font-bold">
          Effort Education
        </div>

        {/* Right-aligned components (User profile, etc.) */}
        <div>
          {/* Add your logo or any other component here */}
        </div>
      </div>
    </header>
  );
}

export default Header;