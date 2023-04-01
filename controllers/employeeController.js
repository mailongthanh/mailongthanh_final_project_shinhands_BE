const Employee = require("../models/Employee");

const employeeController = {
  //GET EMPLOYESS
  getAllEmployees: async (req, res) => {
    try {
      const employee = await Employee.find();
      res.status(200).json(employee);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //add a new employee
  addEmployee: async (req, res) => {
    try {
      //Create new employee
      const newEmployee = await new Employee({
        name: req.body.name,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        age: req.body.age,
        gender: req.body.gender,
        positionid: req.body.positionid,
        departmentid: req.body.departmentid,
      });

      const employee = await newEmployee.save();
      res.status(200).json(employee);
    } catch (err) {}
  },

  updateEmployee: async (req, res) => {
    try {
      await Employee.findByIdAndUpdate(req.params.id, req.body);
      return res.status(200).json("Employee updated");
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  deleteEmployee: async (req, res) => {
    try {
      await Employee.findByIdAndDelete(req.params.id);
      return res.status(200).json("Employee is deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  getEmployeeByDepartment: async (req, res) => {
    var query = { departmentid: req.params.id };
    try {
      const employee = await Employee.find(query).exec();
      res.status(200).json(employee);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getEmployeeByPosition: async (req, res) => {
    var query = { positionid: req.params.id };
    try {
      const employee = await Employee.find(query).exec();
      res.status(200).json(employee);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = employeeController;
