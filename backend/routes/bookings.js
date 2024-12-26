const express = require('express');
const router = express.Router();

// POST a booking (mock)
router.post('/', (req, res) => {
  const { listingId, userId, checkIn, checkOut } = req.body;
  if (listingId && userId && checkIn && checkOut) {
    res.json({ message: 'Booking successful', bookingId: Date.now() });
  } else {
    res.status(400).json({ message: 'Invalid booking data' });
  }
});

module.exports = router;
