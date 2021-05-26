const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

// Matches with "/api/trips"
router.route("/")
  .get(tripsController.findAll)
  .post(tripsController.create);

// Matches with "/api/trips/:id"
router
  .route("/:id")
  .get(tripsController.findById)
  .delete(tripsController.remove);

module.exports = router;
