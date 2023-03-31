const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    departmentname: {
      type: String,
      require: true,
      min: 6,
      max: 20,
    },
    managerid: {
      type: String,
      require: true,
      min: 6,
      max: 20,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Department", departmentSchema);
