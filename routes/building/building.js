const express = require("express");
const building = require("../../controllers/building/building");
const router = express.Router();

router.get("/buildings", building.getBuildings);

router.get("/building/:id", building.getBuilding);

router.post("/building", building.createBuildings);

router.patch("/building/:id", building.updateBuilding);

router.delete("/building/:id", building.deleteBuilding);

module.exports = router;
