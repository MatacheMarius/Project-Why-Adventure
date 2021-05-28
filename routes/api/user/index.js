const router = require("express").Router();
const userRoutes = require("./userRoutes");

// User routes
router.use("/", userRoutes);

module.exports = router;