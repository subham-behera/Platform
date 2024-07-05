import React from "react";

const LandingCarousel = () => {
  return (
    <div className="relative">
      <div className="relative h-64 sm:h-96 overflow-hidden">
        <img
          src="https://via.placeholder.com/1200x400"
          alt="Carousel Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-6xl font-bold">Welcome to Our Store</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingCarousel;
