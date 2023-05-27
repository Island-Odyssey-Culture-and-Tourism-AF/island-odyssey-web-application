const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  textArea: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: false
  },
  authorName: {
    type: String,
    required: true
  }
});

module.exports = Blog = mongoose.model('Blog', BlogSchema);