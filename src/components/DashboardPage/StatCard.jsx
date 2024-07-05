import React from "react";

const StatCard = ({ stat }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-blue-500 text-white rounded-md p-4">
          {stat.icon}
        </div>
        <div className="ml-4">
          <p className="text-2xl font-semibold">{stat.value}</p>
          <p className="text-gray-600">{stat.title}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
