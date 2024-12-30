import React from 'react';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
const images = {
  pic1,
  pic2,
  pic3,
};
const ListingCard = ({ title, type, guests, bedrooms, bathrooms, price, image }) => {
  return (
    <div className="border rounded-md p-4 shadow-lg">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-md mb-2"
        />
      )}
      <h2 className="text-xl font-bold">{title}</h2>
      <p>Type: {type}</p>
      <p>Guests: {guests}</p>
      <p>Bedrooms: {bedrooms}</p>
      <p>Bathrooms: {bathrooms}</p>
      <p>Price: ${price} / night</p>
    </div>
  );
};

export default ListingCard;
