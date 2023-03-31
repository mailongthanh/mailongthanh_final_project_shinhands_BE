const positionController = require("../controllers/positionController.js");
const {
  verifyToken,
  verifyTokenAndUser,
  verifyTokenAndUserAuthorization,
} = require("../controllers/verifyToken");

const router = require("express").Router();

//GET ALL USERS
router.get("/", positionController.getAllPositions);

// router.post("/add", positionController.addPosition);

// router.delete(
//   "/:id/delete",
//   verifyTokenAndUserAuthorization,
//   positionController.deletePosition
// );

module.exports = router;
