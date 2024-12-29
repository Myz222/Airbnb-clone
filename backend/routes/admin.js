const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing'); // Existing Listing model
const Booking = require('../models/Booking'); // Existing Booking model

// Middleware for admin authentication (Placeholder)
const adminAuthMiddleware = (req, res, next) => {
  const isAdmin = true; // Replace with actual JWT/authentication logic
  if (!isAdmin) {
    return res.status(403).json({ error: 'Access denied. Admins only.' });
  }
  next();
};

// Fetch all listings (Admin View)
router.get('/listings', adminAuthMiddleware, async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ error: 'Failed to fetch listings' });
  }
});

// Add a new listing
router.post('/listings', adminAuthMiddleware, async (req, res) => {
  const { title, type, guests, bedrooms, bathrooms, price, image } = req.body;

  // Validate input
  if (!title || !type || !price) {
    return res.status(400).json({ error: 'Title, type, and price are required.' });
  }

  try {
    const newListing = new Listing({ title, type, guests, bedrooms, bathrooms, price, image });
    const savedListing = await newListing.save();
    res.status(201).json(savedListing);
  } catch (error) {
    console.error('Error adding listing:', error);
    res.status(500).json({ error: 'Failed to add listing' });
  }
});

// Delete a listing by ID
router.delete('/listings/:id', adminAuthMiddleware, async (req, res) => {
  const { id } = req.params;

  try {
    const deletedListing = await Listing.findByIdAndDelete(id);
    if (!deletedListing) {
      return res.status(404).json({ error: 'Listing not found.' });
    }
    res.json({ message: 'Listing deleted successfully.', deletedListing });
  } catch (error) {
    console.error('Error deleting listing:', error);
    res.status(500).json({ error: 'Failed to delete listing' });
  }
});

// Fetch all bookings (Admin Overview)
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('property', 'title');

    const updatedBookings = bookings.map((booking) => {
      const checkInDate = new Date(booking.startDate);
      const checkOutDate = new Date(booking.endDate);
      const days = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
      const totalPrice = booking.price * days; // Use stored price

      return {
        ...booking._doc, // Spread existing booking data
        totalPrice, // Add calculated total price
      };
    });

    res.json(updatedBookings);
  } catch (err) {
    console.error('Error fetching admin bookings:', err);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

module.exports = router;
