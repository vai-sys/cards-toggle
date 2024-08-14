

import React, { useState } from 'react';

const BookCard = ({ title, genre, description, imgSrc, theme }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`flex flex-col items-center mb-10 w-9/12 md:w-1/3 px-4 mx-auto ${
        theme === 'dark' ? 'dark-mode' : 'light-mode'
      }`}
    >
      <div
        className={`bg-${theme === 'dark' ? 'dark-500' : 'white'} bg-opacity-5 rounded-lg p-6 transition-transform duration-300 transform hover:translate-y-[-10px] shadow-lg`}
      >
        <div className="flex justify-center items-center">
          <div
            className="w-52 h-72 bg-cover bg-center pl-[-20px] rounded-lg mb-4"
            style={{ backgroundImage: `url(${imgSrc})`, backgroundPosition: '50% 50%' }}
          ></div>
        </div>
        <h3
          className={`text-xl font-bold ${
            theme === 'dark' ? 'text-white-300' : 'text-white-800'
          } mb-2`}
        >
          {genre}
        </h3>
        <p
          className={`italic ${
            theme === 'dark' ? 'text-gray-700' : 'text-gray-200'
          } mb-4`}
        >
          "{isExpanded ? description : `${description.slice(0, 100)}...`}"
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`text-${theme === 'dark' ? 'purple-400' : 'purple-600'} hover:text-${
            theme === 'dark' ? 'purple-500' : 'purple-900'
          } transition-colors text-sm`}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default BookCard;