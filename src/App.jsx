import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListingDetails from './pages/ListingDetails';
import BookingPage from './pages/BookingPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings/:id" element={<ListingDetails />} />
        <Route path="/book/:id" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
