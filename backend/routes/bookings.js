const express = require('express');
const Booking = require('../models/Booking');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();
router.post('/', verifyToken, async (req, res) => {
  const { property, startDate, endDate, guests } = req.body;
  if (!property || !startDate || !endDate || !guests) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  try {
    const newBooking = new Booking({
      user: req.user.id, 
      property,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      guests,
    });
    const savedBooking = await newBooking.save();
    res.status(201).json({ message: 'Booking successful!', booking: savedBooking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().populate('property');
    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});
router.get('/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('user', 'name') 
      .populate('property', 'title price'); 

    console.log('Fetched Bookings:', bookings); 

    const updatedBookings = bookings.map((booking) => {
      const checkInDate = new Date(booking.startDate);
      const checkOutDate = new Date(booking.endDate);
      const days = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)); 
      const totalPrice = booking.property ? booking.property.price * days : null;

      console.log('Calculated Total Price:', {
        bookingId: booking._id,
        days,
        totalPrice,
      }); 

      return {
        ...booking._doc, 
        totalPrice, 
      };
    });

    res.json(updatedBookings);
  } catch (err) {
    console.error('Error fetching admin bookings:', err);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

module.exports = router;
