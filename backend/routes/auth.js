const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Booking = require('../models/Booking');
const router = express.Router();
require('dotenv').config();
console.log("Environment Variables:", process.env);
router.post('/signup', async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    const user = new User({ name, email, password, role });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Signup Error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});
console.log("JWT_SECRET:", process.env.JWT_SECRET);

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    console.log("Login request received:", req.body);
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        console.log("User not found");
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log("Password does not match");
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      const token = jwt.sign(
        { id: user._id, name: user.name, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      console.log("Token generated:", token);
  
      res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
      console.error("Login Error:", err);
      res.status(500).json({ error: 'Server error' });
    }
  });
function verifyToken(req, res, next) {
    console.log('Authorization Header:', req.headers.authorization);
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(403).json({ error: 'Access denied' });
    }
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; 
      next();
    } catch (err) {
      res.status(401).json({ error: 'Invalid token' });
    }
  }
  router.post('/book', verifyToken, async (req, res) => {
    const { property, startDate, endDate, guests } = req.body;
    try {
      const booking = new Booking({
        user: req.user.id,  
        property,
        startDate,
        endDate,
        guests,
      });
      await booking.save();
      res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (err) {
      console.error('Booking Error:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });
router.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: `Hello, ${req.user.role}! You have access.` });
});
module.exports = router;
