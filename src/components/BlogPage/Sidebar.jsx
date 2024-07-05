import React from "react";

const Sidebar = ({ categories, tags }) => {
  return (
    <aside>
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h3 className="text-xl font-bold mb-4">Categories</h3>
        <ul>
          {categories.map(category => (
            <li key={category} className="mb-2">
              <a href="#" className="text-indigo-600 hover:underline">{category}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
