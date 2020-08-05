const House = require("../../../../models/house");

//rooms
// @route   PATCH api/room/:id
// @desc    Add room to your house
// @access  Private
exports.updateRoom = (req, res) => {
  House.findOne({ user_id: req.user._id })
    .then((house) => {
      if (!house.room) {
        return res.status(404).json({
          error: "no room registered",
        });
      }

      const roomIndex = house.room
        .map((item) => item._id)
        .indexOf(req.params.id);
      if (roomIndex === -1) {
        return res.status(400).json({
          message: "could not update",
        });
      }

      house.room[roomIndex].name = req.body.name;
      house
        .save()
        .then((house) => res.status(200).json(house))
        .catch((err) =>
          res.status(402).json({
            message: "update to db error",
            error: err,
          })
        );
    })
    .catch((err) => res.status(404).json(err));
};
// @route   POST api/room/
// @desc    upadte room
// @access  Private
exports.createRoom = (req, res) => {
  House.findOne({ user_id: req.user._id }).then((house) => {
    const newRoom = {
      name: req.body.name,
    };
    house.room.unshift(newRoom);
    house
      .save()
      .then((house) => res.status(200).json(house))
      .catch((err) =>
        res.status(403).json({
          message: "saving to db error",
          error: err,
        })
      );
  });
};
// @route   DELETE api/room/:id
// @desc    delete room
// @access  Private
exports.deleteRoom = (req, res) => {
  House.findOne({ user: req.user.id })
    .then((house) => {
      // Get remove index
      const removeIndex = house.room
        .map((item) => item._id)
        .indexOf(req.params.id);

      if (removeIndex === -1) {
        return res.status(400).json({
          message: "could not delete",
        });
      }

      // Splice out of array
      house.room.splice(removeIndex, 1);

      // Save
      house.save().then((house) => res.json(house));
    })
    .catch((err) =>
      res.status(403).json({
        message: "saving to db error",
        error: err,
      })
    );
};
