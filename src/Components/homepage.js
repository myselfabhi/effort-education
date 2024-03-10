import React from 'react';
import { Link } from 'react-router-dom';
import CTASection from './CTASection';


function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Effort Education</h1>
          <p className="text-lg mb-8">Unlock Your Potential with Our Comprehensive Courses</p>
          <Link to="/courses" className="bg-white text-blue-600 py-2 px-6 rounded-full uppercase text-lg font-semibold hover:bg-blue-100 hover:text-blue-700 transition duration-300">Explore Courses</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Effort Education?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
            <p className="text-gray-700">Learn from industry-leading experts with years of experience in banking and finance. Our instructors are dedicated to providing high-quality education and sharing their practical insights to help you succeed.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Comprehensive Course Curriculum</h3>
            <p className="text-gray-700">Our courses are meticulously designed to cover all aspects of banking exams, ensuring you have the knowledge and skills needed to excel. From foundational concepts to advanced strategies, we've got you covered.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Personalized Learning Experience</h3>
            <p className="text-gray-700">At Effort Education, we understand that every student is unique. That's why we offer personalized learning experiences tailored to your needs and learning style. Whether you prefer interactive lectures, one-on-one sessions, or self-paced learning, we've got the resources to support you.</p>
          </div>
          {/* Add more feature cards here */}
        </div>
      </div>
    </section>

      {/* Courses Section */}
      <section className="py-12 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Course card for Banking Exams */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Banking Exams</h3>
            <p className="text-gray-700 mb-4">Prepare for banking entrance exams with our comprehensive course. Learn essential concepts, practice with mock tests, and ace your exams with confidence.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full uppercase text-sm font-semibold hover:bg-blue-700 transition duration-300">Enroll Now</button>
          </div>
          {/* Course card for UGC NET */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">UGC NET</h3>
            <p className="text-gray-700 mb-4">Get ready for UGC NET exams with our specialized course. Master your subject, practice with previous years' papers, and excel in your NET exam with ease.</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full uppercase text-sm font-semibold hover:bg-blue-700 transition duration-300">Enroll Now</button>
          </div>
        </div>
      </div>
    </section>

     

      {/* Call-to-Action Section */}
      <CTASection/>
    </div>
  );
}

export default HomePage;

