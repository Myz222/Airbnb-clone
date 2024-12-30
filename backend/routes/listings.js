const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ListingSchema = new mongoose.Schema({
  title: String,
  type: String,
  guests: Number,
  bedrooms: Number,
  bathrooms: Number,
  price: Number,
  image: String,
});
const Listing = mongoose.model('Listing', ListingSchema);
router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find();
    console.log('Fetched Listings:', listings); 
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch listings' });
  }
});
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
