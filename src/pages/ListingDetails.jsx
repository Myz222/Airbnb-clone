import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/listings/${id}`)
      .then((response) => setListing(response.data))
      .catch((error) => console.error('Error fetching listing details:', error));
  }, [id]);

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{listing.title}</h1>
      <img src={`/assets/${listing.image}`} alt={listing.title} className="w-full rounded-md my-4" />
      <p className="text-lg">Type: {listing.type}</p>
      <p className="text-lg">Guests: {listing.guests}</p>
      <p className="text-lg">Bedrooms: {listing.bedrooms}</p>
      <p className="text-lg">Bathrooms: {listing.bathrooms}</p>
      <p className="text-lg">Price per night: ${listing.price}</p>
      <p className="text-lg">Rating: {listing.rating}</p>
      <button
        onClick={() => navigate(`/book/${id}`)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Book Now
      </button>
    </div>
  );
};

export default ListingDetails;
