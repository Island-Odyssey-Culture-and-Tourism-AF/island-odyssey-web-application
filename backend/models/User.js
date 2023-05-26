const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'user'], // Define the allowed roles
    default: 'user' // Set the default role as 'user'
  }
});

module.exports = User = mongoose.model('User', UserSchema);