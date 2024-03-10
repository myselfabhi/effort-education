// ReviewsSection.js
import React from 'react';
import ReviewTile from './ReviewTile';

const reviews = [
  { id: 1, name: 'Isha', date: '21 Jun 2018', content: 'It has excellent faculty and conducts regular tests. Gives equal attention to all students and ensures performance of everyone. It is good at keeping you motivated. Not just this, it also has a very fun way of teaching and has a positive environment.t' },
  { id: 2, name: 'Arunabh', date: '27 Dec 2019', content: 'The quality of education here is very good and teachers pay attention to every individual. They provide modules and MCQ packages to improve student`s skills and take practice test every week in order to make sure that students are keeping up with the syllabus completed in coaching. Overall, faculty is very friendly and understanding, they even reschedule classes in accordance with the students so that none of the students face any kind of loss.' },
  { id: 3, name: 'Priya', date: '18 Jun 2018', content: 'If you want to be a banker, this is the best place. Qualifies faculty, individual attention and they provide the best service. ' },
  // Add more review objects as needed
];

const ReviewsSection = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div key={review.id} className="bg-white rounded-lg shadow-md mb-4">
            <ReviewTile review={review} />
          </div>
        ))}
        {reviews.length % 3 === 0 && (
          <div className="flex justify-center mt-4">
            <a href="https://www.justdial.com/Delhi/Effort-Education-Near-Shipra-Mall-Indirapuram/011PXX11-XX11-140628212002-T6W3_BZDET/reviews" className="bg-blue-500 text-white py-2 px-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out">See More Reviews</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsSection;
