const express = require('express');
const router = express.Router();
const listings = require('../data/listings.json');

// GET all listings
router.get('/', (req, res) => {
  res.json(listings);
});

// GET a listing by ID
router.get('/:id', (req, res) => {
  const listing = listings.find((l) => l.id === req.params.id);
  if (listing) {
    res.json(listing);
  } else {
    res.status(404).json({ message: 'Listing not found' });
  }
});

module.exports = router;
