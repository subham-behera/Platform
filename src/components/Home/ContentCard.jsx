import React from 'react';

const ContentCard = ({imageurl,title,desc}) => {
  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src={imageurl}
            alt="Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:ml-8">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-gray-700 mb-4">
            {desc}
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;