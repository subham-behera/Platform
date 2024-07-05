import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <input
        type="text"
        placeholder="Search articles..."
        className="bg-white shadow rounded-md px-4 py-2 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
