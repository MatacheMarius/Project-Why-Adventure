const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guideSchema = new Schema(
  {
   
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
         },

    dateRange:{
        type: [String]
    } 

  },
);

const Guide = mongoose.model("Guide", guideSchema)

module.exports = Guide;
