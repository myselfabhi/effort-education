import React from 'react';

function CTASection() {
  return (
    <section className="bg-blue-600 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-8">Connect with us on social media for updates, news, and more!</p>
        {/* Social media icons */}
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/efforteducation" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://twitter.com/effort_edu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/effort_education/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          {/* Add more social media icons and links as needed */}
        </div>
        {/* Call-to-action button */}
        <button className="bg-white text-blue-600 py-2 px-6 rounded-full uppercase text-lg font-semibold hover:bg-blue-100 hover:text-blue-700 transition duration-300 mt-8">
          Browse Courses
        </button>
      </div>
    </section>
  );
}

export default CTASection;
