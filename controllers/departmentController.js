const Department = require("../models/Department");

const departmentController = {
  getAllDepartments: async (req, res) => {
    try {
      const department = await department.find();
      return res.status(200).json(department);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};

module.exports = departmentController;
