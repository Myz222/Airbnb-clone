import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6 mt-8">
      <div className="flex justify-between">
        <div>
          <h4 className="font-bold">Support</h4>
          <ul>
            <li><a href="/" className="hover:underline">Help Center</a></li>
            <li><a href="/" className="hover:underline">Safety Information</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold">Community</h4>
          <ul>
            <li><a href="/" className="hover:underline">Diversity & Belonging</a></li>
            <li><a href="/" className="hover:underline">Accessibility</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-4">&copy; 2024 Airbnb, Inc.</p>
    </footer>
  );
};

export default Footer;
