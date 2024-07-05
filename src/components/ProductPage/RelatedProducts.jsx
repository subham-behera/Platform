import React from "react";

const RelatedProducts = ({ products }) => {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold mb-6">Related Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow rounded-lg p-6">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-4" />
            <h4 className="text-lg font-bold">{product.name}</h4>
            <p className="text-gray-800">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
