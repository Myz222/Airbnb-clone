import React from 'react';

function ListingCard({ image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt="Property" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Beautiful Beachfront House</h3>
        <p className="text-gray-500">Entire home • 4 guests • 2 bedrooms</p>
        <p className="text-xl font-bold">$200 / night</p>
      </div>
    </div>
  );
}

export default ListingCard;
