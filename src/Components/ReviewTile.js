// ReviewTile.js
import React from 'react';
import profile from './Profile.jpg';


const ReviewTile = ({ review }) => {
  const { name, date, content } = review;

  return (
    <div className="border border-gray-200 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <img
          src={profile}
          alt="Profile Pic"
          className="h-10 w-10 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <p className="text-gray-800">{content}</p>
    </div>
  );
};

export default ReviewTile;
