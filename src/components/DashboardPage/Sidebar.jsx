import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-gray-100 flex flex-col">
      <div className="px-4 py-4 text-2xl font-bold">Logo</div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        <a href="#" className="block px-4 py-2 rounded-md hover:bg-gray-700">
          Dashboard
        </a>
        <a href="#" className="block px-4 py-2 rounded-md hover:bg-gray-700">
          Users
        </a>
        <a href="#" className="block px-4 py-2 rounded-md hover:bg-gray-700">
          Settings
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
