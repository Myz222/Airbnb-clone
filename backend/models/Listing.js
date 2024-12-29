const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  images: [String], // Array of image URLs
}, { timestamps: true });

// Use an existing model if it exists, otherwise define it
const Listing = mongoose.models.Listing || mongoose.model('Listing', listingSchema);

module.exports = Listing;
