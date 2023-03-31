const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      min: 6,
      max: 20,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    phonenumber: {
      type: String,
    },
    age: {
      type: Number,
      require: true,
    },
    gender: {
      type: String,
      require: true,
      min: 6,
    },
    positionid: {
      type: String,
      require: true,
    },
    departmentid: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", employeeSchema);
