const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Trips collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/whyadventure"
);

const tripSeed = [
  
];

db.Trip
  .remove({})
  .then(() => db.Trip.collection.insertMany(tripSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
