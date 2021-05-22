const router = require("express").Router();
const Trip = require("../models/Trip");

//create a trip
router.post("/", async (req, res) => {
  const newTrip = new Trip(req.body);
  try {
    const savedTrip = await newTrip.save();
    res.status(200).json(savedTrip);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all trip
router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(pins);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
