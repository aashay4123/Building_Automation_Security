const House = require("../../../models/house");

// @route   GET api/house/all
// @desc    get all houses list
// @access  admin
exports.getHouseAll = (req, res) => {
  House.find()
    .populate("user_id", ["name", "email"])
    .select("-room")
    .select("-__v")
    .then((houses) => {
      if (!houses) {
        return res.status(404).json({
          error: "no house registered",
        });
      }

      res.json(houses);
    })
    .catch((err) => res.status(404).json({ house: "There are no houses" }));
};

// @route   GET api/house/
// @desc    1 house per user. No id required
// @access  Private
exports.getHouse = (req, res) => {
  House.findOne({ user_id: req.user._id })
    .populate("user_id", ["name", "email"])
    .select("-__v")
    .then((house) => {
      if (!house) {
        return res.status(404).json({
          error: "no house registered",
        });
      }
      res.status(200).json(house);
    })
    .catch((err) => res.status(404).json(err));
};

// @route   POST api/house/
// @desc    Add house in ref to user
// @access  Private
exports.createHouse = (req, res) => {
  console.log("create house");
  const house = {};
  house.user_id = req.user._id;
  if (req.body.name) house.name = req.body.name;
  if (req.body.flat) house.flat = req.body.flat;
  if (req.body.floor) house.floor = req.body.floor;
  if (req.body.address) house.address = req.body.address;
  House.findOne({ user_id: req.user._id }).then((houseres) => {
    if (houseres) {
      /**TODO:
       * only allow name to update
       */

      House.findOneAndUpdate(
        { user_id: req.user._id },
        { $set: house },
        { new: true }
      )
        .then((house) => res.status(201).json({ house, message: "updated" }))
        .catch((err) =>
          res.status(400).json({
            error: err,
          })
        );
    } else {
      // Save house
      new House(house)
        .save()
        .then((house) => res.status(200).json(house))
        .catch((err) =>
          res.status(403).json({
            message: "saving to db error",
            error: err,
          })
        );
    }
  });
};

// @route   DELETE api/house/
// @desc    delete house
// @access  Private
exports.deleteHouse = (req, res) => {
  House.findOneAndRemove({ user_id: req.user.id }).then(() => {
    res.json({ success: true });
  });
};
