import React from 'react';
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold">Airbnb</div>
      <ul className="hidden md:flex space-x-4">
        <li><a href="/" className="hover:text-blue-500">Home</a></li>
        <li><a href="/experiences" className="hover:text-blue-500">Experiences</a></li>
        <li><a href="/online-experiences" className="hover:text-blue-500">Online Experiences</a></li>
      </ul>
      <div className="space-x-4">
        <a href="/login" className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600">Login</a>
        <a href="/signup" className="py-2 px-4 bg-gray-200 rounded-md hover:bg-gray-300">Signup</a>
      </div>
    </nav>
  );
};
export default Navbar;
