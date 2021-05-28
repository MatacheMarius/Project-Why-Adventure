const router = require("express").Router();
const tripRoutes = require("./trips");
const userRoutes = require("./user");
const trips = require("./trips")


// User routes
router.use("/users", userRoutes);
router.use("/trips", trips)

module.exports = router;
