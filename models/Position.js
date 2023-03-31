const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema(
  {
    positionname: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Position", positionSchema);
