import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookingPage = () => {
  const { id } = useParams(); // Listing ID
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState('');
  const navigate = useNavigate();

  const handleBooking = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/bookings', {
        property: id,
        startDate,
        endDate,
        guests,
      });
      alert('Booking successful!');
      navigate('/'); // Redirect to home after booking
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to book. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Book Listing</h1>
      <div className="mt-4">
        <label className="block text-lg">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
      </div>
      <div className="mt-4">
        <label className="block text-lg">End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
      </div>
      <div className="mt-4">
        <label className="block text-lg">Number of Guests</label>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
      </div>
      <button
        onClick={handleBooking}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingPage;
