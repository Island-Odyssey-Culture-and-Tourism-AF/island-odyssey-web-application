const express = require("express");
const router = express.Router();
const Transportation = require("../models/transportation");

router.post("/send", (req, res) => {
  Transportation.create(req.body)
    .then((transport) => res.json({ msg: "add  successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add" }));
});

router.get("/get", (req, res) => {
  Transportation.find()
    .then((transportations) => {
      res.status(200).json(transportations);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch transportations" });
    });
});

router.get("/:id", (req, res) => {
  const transportationId = req.params.id;

  Transportation.findById(transportationId)
    .then((transportation) => {
      if (!transportation) {
        return res.status(404).json({ error: "Transportation not found" });
      }
      res.status(200).json(transportation);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch transportation" });
    });
});

router.put("/:id", (req, res) => {
  const transportationId = req.params.id;
  const updatedTransportation = req.body;

  Transportation.findByIdAndUpdate(transportationId, updatedTransportation, {
    new: true,
  })
    .then((updatedTransportation) => {
      if (!updatedTransportation) {
        return res.status(404).json({ error: "Transportation not found" });
      }
      res.status(200).json(updatedTransportation);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to update transportation" });
    });
});

router.delete("/:id", (req, res) => {
  const transportationId = req.params.id;

  Transportation.findByIdAndRemove(transportationId)
    .then((deletedTransportation) => {
      if (!deletedTransportation) {
        return res.status(404).json({ error: "Transportation not found" });
      }
      res.status(200).json({ message: "Transportation deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to delete transportation" });
    });
});

module.exports = router;
