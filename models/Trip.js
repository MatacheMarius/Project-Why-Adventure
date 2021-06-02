const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema(
  {
    username: {
      type: String,
      
    },
    guide: {
      type: Boolean,
     
    },
    desc: {
      type: String,
 
      min: 3,
    },
    location: {
      type: String,
     
      min: 0,
      max: 75,
    },
    date: { 
      type: Date, 
      default: Date.now,
    },
    booked: {
      type: Boolean,
     
    },
    favorited: {
      type: Boolean,

    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,},
    gender: {
          type: String,
         },
    experience: {
          type: String,
         },
    cell: {
          type: String,
         },
    email:{
          type: String,
         }

    

  },
);

const Trip = mongoose.model("Trip", tripSchema)

module.exports = Trip;
