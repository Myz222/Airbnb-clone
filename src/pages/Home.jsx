import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import ListingCard from '../components/ListingCard';
import Footer from '../components/Footer';

const Home = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/listings')
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
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
