const Position = require("../models/Position");

const positionController = {
  getAllPositions: async (req, res) => {
    try {
      const position = await Position.find();
      res.status(200).json(position);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // addPosition: async (req, res) => {
  //   try {
  //     const positiondb = await Position.findOne({
  //       positionname: req.body.positionname,
  //     });
  //     if (!positiondb) {
  //       const newPosition = await new Position({
  //         positionname: req.body.positionname,
  //       });

  //       const position = await newPosition.save();
  //       res.status(200).json(position);
  //     } else {
  //       res.staus(404).json("Position is existed");
  //     }
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },

  // deletePosition: async (req, res) => {
  //   try {
  //     await Position.findByIdAndDelete(req.params.id);
  //     return res.status(200).json("Position is deleted");
  //   } catch (err) {
  //     return res.status(500).json(err);
  //   }
  // },
};

module.exports = positionController;
