import React, { useState } from 'react';
const Categories = () => {
  const categories = ['Beachfront', 'Cabins', 'Trending', 'Luxury', 'Family Friendly'];
  const [activeCategory, setActiveCategory] = useState('');
  return (
    <div className="flex space-x-4 overflow-x-auto py-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-md ${
            activeCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
