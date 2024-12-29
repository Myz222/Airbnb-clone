const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// POST route to create a new booking
router.post('/', async (req, res) => {
  const { property, startDate, endDate, guests } = req.body;

  // Validate input
  if (!property || !startDate || !endDate || !guests) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newBooking = new Booking({
      user: "GUEST_USER", // Placeholder for now.
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

// GET route to retrieve all bookings
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
            .populate('user', 'name') // Populate user name
            .populate('property', 'title price'); // Populate property title and price

        console.log('Fetched Bookings:', bookings); // Debug log

        const updatedBookings = bookings.map((booking) => {
            const checkInDate = new Date(booking.startDate);
            const checkOutDate = new Date(booking.endDate);
            const days = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)); // Calculate number of days
            const totalPrice = booking.property ? booking.property.price * days : null;

            console.log('Calculated Total Price:', {
                bookingId: booking._id,
                days,
                totalPrice,
            }); // Debug log

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
