import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">E-Commerce</div>
          <nav className="space-x-4">
            <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Shop</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
