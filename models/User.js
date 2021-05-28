const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
    // {
    // username: { type: String, required: true },
    // password: { type: String, required: true },
    // email: { type: String, required: true }
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
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;