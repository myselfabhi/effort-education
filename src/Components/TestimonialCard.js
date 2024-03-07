import React from 'react';

function TestimonialCard({ name, title, feedback }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 mb-2">{title}</p>
      <p className="text-gray-600">{feedback}</p>
    </div>
  );
}

export default TestimonialCard;
