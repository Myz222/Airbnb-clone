const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the Listing Schema directly in this file
const ListingSchema = new mongoose.Schema({
  title: String,
  type: String,
  guests: Number,
  bedrooms: Number,
  bathrooms: Number,
  price: Number,
  image: String,
});

// Create the Listing model
const Listing = mongoose.model('Listing', ListingSchema);

// Get all listings
router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find();
    console.log('Fetched Listings:', listings); // Debug log
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch listings' });
  }
});

// Get a specific listing by ID
router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }
    res.json(listing);
  } catch (err) {
    console.error('Error fetching listing:', err); // Debug log
    res.status(500).json({ error: 'Failed to fetch listing' });
  }
});

module.exports = router;
