import React from 'react';
import TestimonialCard from './TestimonialCard';

function TestimonialSection() {
  const testimonials = [
    {
      name: 'John Doe',
      title: 'Banking Exam Aspirant',
      feedback: 'Effort Education helped me immensely in preparing for my banking exams. The course content is comprehensive, and the instructors are highly knowledgeable. I highly recommend it to anyone aspiring to crack banking exams.'
    },
    {
      name: 'Jane Smith',
      title: 'UGC NET Aspirant',
      feedback: 'I enrolled in the UGC NET course at Effort Education, and I couldn\'t be happier with my decision. The course material is top-notch, and the personalized support I received from the instructors was invaluable. Thanks to Effort Education, I cleared my NET exam with flying colors.'
    }
    // Add more testimonials as needed
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
