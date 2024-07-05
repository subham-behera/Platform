import React from 'react';

const features = [
  {
    id: 1,
    title: "Feature One",
    description: "Description of the first feature.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Feature Two",
    description: "Description of the second feature.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Feature Three",
    description: "Description of the third feature.",
    image: "https://via.placeholder.com/150",
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <img src={feature.image} alt={feature.title} className="mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
