import React from 'react';

function SearchBar() {
  return (
    <div className="flex justify-center mt-6">
      <input
        type="text"
        placeholder="Search for location..."
        className="border rounded-l-full p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button className="bg-red-500 text-white px-4 py-2 rounded-r-full hover:bg-red-600">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
