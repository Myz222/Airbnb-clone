import React from 'react';

function Categories() {
  const categories = ['Beachfront', 'Cabins', 'Trending', 'Luxury', 'City', 'Rural'];

  return (
    <div className="flex overflow-x-auto mt-6 space-x-4 p-2">
      {categories.map((category, index) => (
        <button
          key={index}
          className="bg-gray-200 px-4 py-2 rounded-full text-gray-700 hover:bg-red-500 hover:text-white"
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
