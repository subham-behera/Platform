import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <p className="text-xl text-gray-800 mb-4">{product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
