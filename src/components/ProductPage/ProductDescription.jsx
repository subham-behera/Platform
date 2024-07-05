import React from "react";

const ProductDescription = ({ description }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <h3 className="text-xl font-bold mb-4">Product Description</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ProductDescription;
