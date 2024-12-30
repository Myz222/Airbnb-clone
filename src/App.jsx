import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ListingDetails from './pages/ListingDetails';
import BookingPage from './pages/BookingPage';
import AdminListings from './pages/AdminListings';
import AdminBookings from './pages/AdminBookings';
import Signup from './pages/Signup';
import Login from './pages/Login';
//import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings/:id" element={<ListingDetails />} />
        <Route path="/book/:id" element={<BookingPage />} />
        <Route path="/admin" element={<AdminListings />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> */}

      </Routes>
    </Router>
  );
}

export default App;
