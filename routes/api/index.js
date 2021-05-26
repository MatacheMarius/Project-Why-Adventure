const router = require("express").Router();
const tripRoutes = require("./trips");

// Book routes
router.use("/trips", tripRoutes);

module.exports = router;
