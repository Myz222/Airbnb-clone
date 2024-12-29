const mongoose = require('mongoose');
const Listing = require('./models/Listing'); // Adjust path as needed

const listings = [
  {
    title: 'Cozy Cabin',
    type: 'Cabin',
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    price: 120,
    image: 'pic1',
  },
  {
    title: 'Beachfront Villa',
    type: 'Villa',
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    price: 300,
    image: 'pic2',
  },
  {
    title: 'Modern Apartment',
    type: 'Apartment',
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    price: 90,
    image: 'pic3',
  },
];

const seedListings = async () => {
  try {
    await mongoose.connect('mongodb+srv://user1:user1@cluster0.ifio8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );

    console.log('Database connected');
    await Listing.deleteMany({});
    console.log('Existing listings removed');

    await Listing.insertMany(listings);
    console.log('New listings added');
    mongoose.disconnect();
  } catch (err) {
    console.error('Error seeding listings:', err);
  }
};

seedListings();
