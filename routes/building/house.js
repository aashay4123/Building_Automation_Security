const express = require("express");
const house = require("../../controllers/building/house/house");
const router = express.Router();
const {
  requireSignin,
  restrictTo,
} = require("../../controllers/auth/middleware");

router.get("/all", requireSignin, restrictTo("admin"), house.getHouseAll);

router.get("/", requireSignin, house.getHouse);

router.post("/", requireSignin, house.createHouse); //update and create

router.delete("/", requireSignin, house.deleteHouse);

module.exports = router;
