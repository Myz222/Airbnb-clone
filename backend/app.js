const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const listingsRoutes = require('./routes/listings');
const bookingsRoutes = require('./routes/bookings');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/listings', listingsRoutes);
app.use('/api/bookings', bookingsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
    res.send('Welcome to the Airbnb-inspired API!');
  });
  