import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-white hover:text-blue-200">Effort Education</Link>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {/* Modified: Wrapped the Study Material link with a Link component */}
            <li><Link to="/login" className="text-white hover:text-blue-200">Study Material</Link></li>
            <li><Link to="/about" className="text-white hover:text-blue-200">About Us</Link></li>
            <li><Link to="/contact" className="text-white hover:text-blue-200">Contact</Link></li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          {/* Hamburger Icon */}
          <button className="text-white hover:text-blue-200 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
