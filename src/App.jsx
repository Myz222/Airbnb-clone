import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import ListingCard from './components/ListingCard';
import Footer from './components/Footer';

import image1 from './assets/pic1.jpg';
import image2 from './assets/pic2.jpg';
import image3 from './assets/pic3.jpg';
import image4 from './assets/pic4.jpg';
import image5 from './assets/pic5.jpg';
import image6 from './assets/pic6.jpg';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <SearchBar />
        <Categories />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {[image1, image2, image3, image4, image5, image6].map((img, index) => (
            <ListingCard key={index} image={img} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
