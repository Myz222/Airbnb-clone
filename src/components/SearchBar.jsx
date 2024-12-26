import React, { useState } from 'react';

const SearchBar = () => {
  const [location, setLocation] = useState('');

  return (
    <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full px-4 py-2 border rounded-md"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
