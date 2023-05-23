const mongoose = require("mongoose");
const { Schema } = mongoose;

const transportationSchema = new Schema({
  destination: { type: String, required: true },
  departureDateTime: { type: Date, required: true },
  returnDateTime: { type: Date },
  preferredModeOfTransportation: {type: String},
  minCost: { type: Number, required: true },
  maxCost: { type: Number, required: true },
  minTripDuration: { type: Number, required: true },
  maxTripDuration: { type: Number, required: true },
  levelOfComfort: {
    type: String,
  },
});

const Transportation = mongoose.model("Transportation", transportationSchema);

module.exports = Transportation;
