const express = require("express");
const router = express.Router();

const Cart = require("../models/JobVacancy");

router.get("/testCart", (req, res) => res.send("Job Vacancy management!"));

router.get("/all", (req, res) => {
  Cart.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(404).json({ noCartfound: "No Job found" }));
});
router.get("/:id", (req, res) => {
  Cart.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(404).json({ noCartfound: "No Job found" }));
});
router.post("/send", (req, res) => {
  Cart.create(req.body)
    .then((item) => res.json({ msg: "Add Job Successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add" }));
});
router.put("/:id", (req, res) => {
  Cart.findByIdAndUpdate(req.params.id, req.body)
    .then((item) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});
router.delete("/:id", (req, res) => {
  Cart.findByIdAndRemove(req.params.id, req.body)
    .then((item) => res.json({ msg: "Job Vacancy deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a job" }));
});
module.exports = router;