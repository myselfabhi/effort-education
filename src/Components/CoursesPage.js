// CoursesPage.js
import React from 'react';

const CoursesPage = () => {
  // Sample course data
  const courses = [
    {
      id: 1,
      title: 'Banking Exams',
      description: 'Prepare for banking entrance exams with our comprehensive course. Learn essential concepts, practice with mock tests, and ace your exams with confidence.',
      imageUrl: 'https://example.com/banking-exams.jpg', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'UGC NET',
      description: 'Get ready for UGC NET exams with our specialized course. Master your subject, practice with previous years\' papers, and excel in your NET exam with ease.',
      imageUrl: 'https://example.com/ugc-net.jpg', // Replace with actual image URL
    },
    // Add more courses as needed
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-md">
            <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-700">{course.description}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full uppercase text-sm font-semibold hover:bg-blue-600 transition duration-300">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
