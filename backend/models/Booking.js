const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: String, // Placeholder for now. Update to ObjectId with 'User' reference when auth is added.
    required: true,
    default: "GUEST_USER", // Default value to simulate a logged-in user.
  },
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);
