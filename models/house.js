const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const houseSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  flat: {
    type: String,
    required: true,
  },
  floor: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  room: [
    {
      name: {
        type: String,
        required: true,
      },

      Equipments: [
        {
          name: {
            type: String,
            required: true,
          },
          topic: {
            type: String,
            required: true,
          },
          power: {
            type: Boolean,
            default: false,
          },
          intensity: {
            type: Number,
            default: 0,
          },
        },
      ],
      Remote: [
        {
          name: {
            type: String,
            // required: true,
          },
          topic: {
            type: String,
            // required: true,
          },

          company: {
            type: String,
            // required: true,
          },
        },
      ],
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = house = mongoose.model("House", houseSchema);
