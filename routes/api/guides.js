const router = require("express").Router();
const guidesController = require("../../controllers/guidesController");

// Matches with "/api/trips"
router.route("/")
  .get(guidesController.findAll)
  .post(guidesController.create);

// Matches with "/api/trips/:id"
router
  .route("/:id")
  .get(guidesController.findById)
  .delete(guidesController.remove);

module.exports = router;
