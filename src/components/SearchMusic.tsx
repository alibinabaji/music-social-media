import React from 'react';

const SearchForm: React.FC = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg flex items-center m-4">
      <input
        type="text"
        placeholder="Search music"
        className="flex-grow px-4 py-2 rounded-l-md focus:outline-none bg-gray-200 text-black"
      />
      <button className="text-black font-bold py-2 px-4 rounded-r-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.5 17.5l5 5"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchForm;
