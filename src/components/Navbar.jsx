import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-red-500">Airbnb</div>
        <div className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-red-500">Home</a>
          <a href="#" className="text-gray-700 hover:text-red-500">Experiences</a>
          <a href="#" className="text-gray-700 hover:text-red-500">Online Experiences</a>
        </div>
        <div className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300">
          <span className="text-gray-700">Login / Signup</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
