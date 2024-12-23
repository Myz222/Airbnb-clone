import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 Airbnb Clone. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-red-500">Support</a>
          <a href="#" className="hover:text-red-500">Community</a>
          <a href="#" className="hover:text-red-500">Hosting</a>
          <a href="#" className="hover:text-red-500">About</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
