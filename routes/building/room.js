const express = require("express");
const room = require("../../controllers/building/house/room/room");
const features = require("../../controllers/building/house/room/features");
const router = express.Router();

const { requireSignin } = require("../../controllers/auth/middleware");

//rooms

router.post("/", requireSignin, room.createRoom);

router.patch("/:id", requireSignin, room.updateRoom);

router.delete("/:id", requireSignin, room.deleteRoom);

// equipments

router.post("/equipment/:room_id", requireSignin, features.createEquipment);

router.patch(
  "/equipment/:room_id/:equipment_id",
  requireSignin,
  features.updateEquipment
);

router.delete(
  "/equipment/:room_id/:equipment_id",
  requireSignin,
  features.deleteEquipment
);

//remote

router.post("/remote/:room_id", requireSignin, features.createRemote);

router.patch(
  "/remote/:room_id/:remote_id",
  requireSignin,
  features.updateRemote
);

router.delete(
  "/remote/:room_id/:remote_id",
  requireSignin,
  features.deleteRemote
);

module.exports = router;
