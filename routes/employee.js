const employeeController = require("../controllers/employeeController.js");
const {
  verifyToken,
  verifyTokenAndUser,
  verifyTokenAndUserAuthorization,
} = require("../controllers/verifyToken");

const router = require("express").Router();

//GET ALL EMPLOYEES
router.get("/", employeeController.getAllEmployees);

//ADD AN EMPLOYEE
router.post("/add", employeeController.addEmployee);
router.get("/:id/getByDepartment", employeeController.getEmployeeByDepartment);
router.delete(
  "/:id/delete",
  verifyTokenAndUserAuthorization,
  employeeController.deleteEmployee
);
router.put("/:id/update", employeeController.updateEmployee);
module.exports = router;
