import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add New
        </button>
      </div>
    </header>
  );
};

export default Header;
