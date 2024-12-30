import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import api from '../api/api';
const Home = () => {
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    api.get('http://localhost:5000/api/listings')
      .then((response) => setListings(response.data))
      .catch((error) => console.error('Error fetching listings:', error));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <SearchBar />
        <Categories />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {listings.map((listing) => (
            <div key={listing._id} className="border p-4 rounded-md">
              <img
                src={`data:image/jpeg;base64,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`}
                alt='pic.jpg'
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-xl font-bold mt-2">{listing.title}</h2>
              <p>${listing.price} per night</p>
              <button
                onClick={() => navigate(`/book/${listing._id}`)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
