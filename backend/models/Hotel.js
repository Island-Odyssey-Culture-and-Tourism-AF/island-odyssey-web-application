const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  mobileNo: {
    type: String,
    required: true
  },
  roomDetails: [{
    roomType: {
      type: String,
      required: true
    },
    guestCount: {
      type: Number,
      required: true
    },
    rate: {
      type: String,
      required: true 
    },
  }],
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Hotel', HotelSchema);