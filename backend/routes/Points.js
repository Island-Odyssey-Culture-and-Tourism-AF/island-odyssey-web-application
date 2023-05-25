const express = require("express");
const router = express.Router();
const Point = require("../models/Point");

// Save the selected points to the database
router.post("/", (req, res) => {
  const { name, latitude, longitude } = req.body;
  const point = new Point({
    name,
    latitude,
    longitude,
  });
  point.save((err, savedPoint) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error saving point to the database" });
    } else {
      res.status(200).json(savedPoint);
    }
  });
});

module.exports = router;
