import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 cursor-pointer" onClick={onClick}>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p className="text-gray-800 mb-2">{product.price}</p>
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
};

export default ProductCard;
