const router = require("express").Router();
const userRoutes = require("./user");
const trips = require("./trips");
const guides = require("./guides");



// User routes
router.use("/users", userRoutes);
router.use("/trips", trips);
router.use("/guides", guides);

module.exports = router;
