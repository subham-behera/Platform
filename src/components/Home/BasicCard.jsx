import React from "react";

const BasicCard = ({ card }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-32 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{card.title}</h3>
      <p className="text-gray-700">{card.description}</p>
    </div>
  );
};

export default BasicCard;
