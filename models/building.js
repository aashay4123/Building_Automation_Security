const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BuildingSchema = new Schema({
  houses: [
    {
      houseId: Schema.Types.ObjectId,
      room: [
        {
          roomId: Schema.Types.ObjectId,
          Equipments: [
            {
              equipmentId: Schema.Types.ObjectId,
              name: {
                type: String,
                required: true,
              },
              power: {
                type: Boolean,
                required: true,
              },
              intensity: {
                //0-100
                type: Number,
                required: true,
              },
            },
          ],
          Remote: [
            {
              remoteId: Schema.Types.ObjectId,
              name: {
                type: String,
                required: true,
              },
            },
          ],
        },
      ],
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = build = mongoose.model("Build", BuildingSchema);
