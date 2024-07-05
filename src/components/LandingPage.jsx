import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import ProductCard from './LandingPage/ProductCard';
import Footer from './LandingPage/Footer';

const products = [
  {
    id: 1,
    name: 'Modern Chair',
    price: '$199.99',
    image: 'https://via.placeholder.com/300x200',
    description: 'A modern chair with a sleek design.',
  },
  {
    id: 2,
    name: 'Stylish Sofa',
    price: '$299.99',
    image: 'https://via.placeholder.com/300x200',
    description: 'A stylish sofa for your living room.',
  },
  {
    id: 3,
    name: 'Comfortable Bed',
    price: '$399.99',
    image: 'https://via.placeholder.com/300x200',
    description: 'A comfortable bed for a good night\'s sleep.',
  },
  {
    id: 4,
    name: 'Elegant Table',
    price: '$149.99',
    image: 'https://via.placeholder.com/300x200',
    description: 'An elegant table for your dining room.',
  },
  {
    id: 5,
    name: 'Comfortable Bed',
    price: '$349.99',
    image: 'https://via.placeholder.com/300x200',
    description: 'A comfortable bed for a good night\'s sleep.',
  },
  // Add more products as needed
];

const LandingPage = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleCardClick(product.id)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
