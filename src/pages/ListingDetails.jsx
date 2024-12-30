import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import api from '../api/api';
const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  useEffect(() => {
    api.get(`http://localhost:5000/api/listings/${id}`)
      .then((response) => setListing(response.data))
      .catch((error) => console.error('Error fetching listing details:', error));
  }, [id]);

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{listing.title}</h1>
      <img
        src={require(`../assets/${listing.image}`).default}
        alt={listing.title}
        className="w-full h-72 object-cover rounded-md mb-4"
      />
      <p className="text-lg mb-2"><strong>Type:</strong> {listing.type}</p>
      <p className="text-lg mb-2"><strong>Guests:</strong> {listing.guests}</p>
      <p className="text-lg mb-2"><strong>Bedrooms:</strong> {listing.bedrooms}</p>
      <p className="text-lg mb-2"><strong>Bathrooms:</strong> {listing.bathrooms}</p>
      <p className="text-lg mb-2"><strong>Price per night:</strong> ${listing.price}</p>
      <p className="text-lg mb-2"><strong>Description:</strong> {listing.description}</p>
    </div>
  );
};

export default ListingDetails;
