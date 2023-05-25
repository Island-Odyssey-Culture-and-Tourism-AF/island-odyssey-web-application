const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  name: String,
  latitude: Number,
  longitude: Number,
});

module.exports = mongoose.model("Point", pointSchema);
