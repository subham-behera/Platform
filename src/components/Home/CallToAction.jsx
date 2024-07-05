import React from 'react';

const CallToAction = () => {
  return (
    <div className="bg-blue-500 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-8">Sign up today and enjoy exclusive benefits!</p>
        <a
          href="#"
          className="bg-white text-blue-500 py-2 px-4 rounded-md text-lg font-semibold hover:bg-gray-100"
        >
          Sign Up Now
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
