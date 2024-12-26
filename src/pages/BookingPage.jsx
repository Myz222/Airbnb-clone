import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookingPage = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/listings/${id}`)
      .then((response) => setListing(response.data))
      .catch((error) => console.error('Error fetching listing details:', error));
  }, [id]);

  const calculateTotalPrice = () => {
    if (!checkIn || !checkOut) return;

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const days = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);

    if (days > 0) {
      setTotalPrice(days * listing.price);
    } else {
      setTotalPrice(0);
    }
  };

  useEffect(() => {
    if (listing) calculateTotalPrice();
  }, [checkIn, checkOut, listing]);

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Booking for {listing.title}</h1>
      <p className="text-lg">Price per night: ${listing.price}</p>

      <div className="mt-4">
        <label className="block">Check-in Date:</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="border p-2 rounded-md"
        />
      </div>

      <div className="mt-4">
        <label className="block">Check-out Date:</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="border p-2 rounded-md"
        />
      </div>

      <p className="mt-4 text-lg">Total Price: ${totalPrice > 0 ? totalPrice : 'Invalid Dates'}</p>

      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        onClick={() => alert('Booking confirmed!')}
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingPage;
