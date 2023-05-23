// routes/api/users.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'yourSecretKey'; // Replace with your own secret key

// Load User model
const User = require('../models/User');

// Register a new user
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email is already taken
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already taken' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      email,
      password: hashedPassword
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check if the password is correct
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Protected route example
router.get('/protected', (req, res) => {
  // Extract the token from the Authorization header
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Missing authorization token' });
  }

  try {
    // Verify the token
    const decodedToken = jwt.verify(token, secretKey);

    // Check if the token is valid
    if (!decodedToken) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Token is valid, return protected data
    res.status(200).json({ message: 'Protected data', userId: decodedToken.userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }

  // @route GET api/users/:email
  // @description Get single user by email
  // @access Public
  // router.get('/:email', async (req, res) => {
  //   User.findOne(req.body.email)
  //     .then(user => res.json(user))
  //     .catch(err => res.status(404).json({ nouserfound: 'No User found' }));
    
  //   // // Find user by email
  //   // const email = req.params.email; // Assuming you're retrieving the email from the request parameters
  //   // const user = await User.findOne({ email });

  //   // if (!user) {
  //   //   // User not found
  //   //   return res.status(404).json({ message: 'User not found' });
  //   // }

  //   // // User found
  //   // return res.status(200).json({ user });
  // });
});

module.exports = router;