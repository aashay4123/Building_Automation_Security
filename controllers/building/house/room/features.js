const House = require("../../../../models/house");

// @route   POST api/room/equipment:room_id/
// @desc    add equipment to room
// @access  Private
exports.createEquipment = (req, res) => {
  House.findOne({ user_id: req.user._id }).then((house) => {
    const newEquipment = {
      name: req.body.name,
      power: req.body.power,
      intensity: req.body.intensity,
      topic: req.body.topic,
    };
    const roomIndex = house.room
      .map((item) => {
        return item._id;
      })
      .indexOf(req.params.room_id);
    if (roomIndex > -1) {
      house.room[roomIndex].Equipments.unshift(newEquipment);
    }
    house
      .save()
      .then((house) => res.status(200).json(house))
      .catch((err) =>
        res.status(403).json({
          message: "Equipment saving to db error",
          error: err,
        })
      );
  });
};

// @route   PATCH api/room/equipment/:room_id/:equipment_id
// @desc    update equipment
// @access  Private
exports.updateEquipment = (req, res) => {
  House.findOne({ user_id: req.user._id })
    .then((house) => {
      if (!house.room) {
        return res.status(404).json({
          error: "no room registered",
        });
      }

      const roomIndex = house.room
        .map((item) => item._id)
        .indexOf(req.params.room_id);

      const equipIndex = house.room[roomIndex].Equipments.map(
        (item) => item._id
      ).indexOf(req.params.equipment_id);
      if (roomIndex === -1 || equipIndex === -1) {
        return res.status(400).json({
          message: "could not update",
        });
      }
      if (req.body.name)
        house.room[roomIndex].Equipments[equipIndex].name = req.body.name;
      if (req.body.topic)
        house.room[roomIndex].Equipments[equipIndex].topic = req.body.topic;
      // if (req.body.power == null)
      house.room[roomIndex].Equipments[equipIndex].power = req.body.power;
      if (req.body.intensity)
        house.room[roomIndex].Equipments[equipIndex].intensity =
          req.body.intensity;

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

// @route   DELETE api/room/equipment:room_id/:equipment_id
// @desc    delete equipment
// @access  Private
exports.deleteEquipment = (req, res) => {
  House.findOne({ user: req.user.id })
    .then((house) => {
      // Get remove index
      const roomIndex = house.room
        .map((item) => item._id)
        .indexOf(req.params.room_id);

      const removeIndex = house.room[roomIndex].Equipments.map(
        (item) => item._id
      ).indexOf(req.params.equipment_id);

      if (roomIndex === -1 || removeIndex === -1) {
        return res.status(400).json({
          message: "could not delete",
        });
      }

      // Splice out of array
      house.room[roomIndex].Equipments.splice(removeIndex, 1);

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

// @route   POST api/room/remote:room_id/
// @desc    add remote to room
// @access  Private
exports.createRemote = (req, res) => {
  House.findOne({ user_id: req.user._id }).then((house) => {
    const newRemote = {
      name: req.body.name,
      company: req.body.company,
      topic: req.body.topic,
    };
    const roomIndex = house.room
      .map((item) => {
        return item._id;
      })
      .indexOf(req.params.room_id);

    if (roomIndex > -1) {
      house.room[roomIndex].Remote.unshift(newRemote);
    }

    house
      .save()
      .then((house) => res.status(200).json(house))
      .catch((err) =>
        res.status(403).json({
          message: "Remote saving to db error",
          error: err,
        })
      );
  });
};
// @route   PATCH api/room/remote:room_id/:remote_id
// @desc    update remote
// @access  Private
exports.updateRemote = (req, res) => {
  House.findOne({ user_id: req.user._id })
    .then((house) => {
      if (!house.room) {
        return res.status(404).json({
          error: "no room registered",
        });
      }

      const roomIndex = house.room
        .map((item) => item._id)
        .indexOf(req.params.room_id);

      const remoteIndex = house.room[roomIndex].Remote.map(
        (item) => item._id
      ).indexOf(req.params.remote_id);

      if (roomIndex === -1 || remoteIndex === -1) {
        return res.status(400).json({
          message: "could not update",
        });
      }
      house.room[roomIndex].Remote[remoteIndex].name = req.body.name;
      house.room[roomIndex].Remote[remoteIndex].company = req.body.company;
      house.room[roomIndex].Remote[remoteIndex].topic = req.body.topic;
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

// @route   DELETE api/room/remote:room_id/:remote_id
// @desc    delete remote
// @access  Private
exports.deleteRemote = (req, res) => {
  House.findOne({ user: req.user.id })
    .then((house) => {
      // Get remove index
      const roomIndex = house.room
        .map((item) => item._id)
        .indexOf(req.params.room_id);

      const removeIndex = house.room[roomIndex].Remote.map(
        (item) => item._id
      ).indexOf(req.params.remote_id);
      if (roomIndex === -1 || removeIndex === -1) {
        return res.status(400).json({
          message: "could not delete",
        });
      }

      // Splice out of array
      house.room[roomIndex].Remote.splice(removeIndex, 1);
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
