const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    // isGuide: {
    //   type: Boolean,
    //   require: true, 
    // }
    //NOTE FROM CONOR: We could also do this if we want guides to be real users?
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);