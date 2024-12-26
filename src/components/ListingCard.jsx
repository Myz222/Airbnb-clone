import React from 'react';
import image from '../assets/pic1.jpg';

const ListingCard = ({ title, type, guests, bedrooms, bathrooms, price, rating }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-600">{type}</p>
        <p className="text-sm text-gray-500">{guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-blue-500 font-bold">${price}/night</span>
          <span className="text-gray-500">{rating} ★</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
