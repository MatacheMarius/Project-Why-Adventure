const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    guide: {
      type: Boolean,
      required: true,
    },
    desc: {
      type: String,
      required: false,
      min: 3,
    },
    location: {
      type: String,
      required: true,
      min: 0,
      max: 75,
    },
    date: { 
      type: Date, 
      default: Date.now,
    },
    booked: {
      type: Boolean,
      required: true,
    },
    favorited: {
      type: Boolean,
      required: true,
    },
  },
);

const Trip = mongoose.model("Trip", tripSchema)

module.exports = Trip;
