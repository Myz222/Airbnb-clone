const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const listingsRoutes = require('./routes/listings');
const bookingsRoutes = require('./routes/bookings');
const adminRoutes = require('./routes/admin'); 
const authRoutes = require('./routes/auth');
require('dotenv').config();
const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());
mongoose
  .connect(process.env.MONGO_URI, { })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));
app.use('/api/listings', listingsRoutes);
app.use('/api/bookings', bookingsRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
  res.send('Welcome to the Airbnb-inspired API!');
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
