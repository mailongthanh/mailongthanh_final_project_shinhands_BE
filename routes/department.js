const departmentController = require("../controllers/departmentController.js");
const {
  verifyToken,
  verifyTokenAndUser,
  verifyTokenAndUserAuthorization,
} = require("../controllers/verifyToken");

const router = require("express").Router();

//GET ALL DEPARTMENTS
router.get("/", departmentController.getAllDepartments);

// router.post("/add", departmentController.addDepartment);

module.exports = router;
