const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Trips collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/whyadventure"
);

const tripSeed = [
  {
    username: "conoro",
    guide: true,
    desc: "this is a test trip",
    location: "Washington?",
    date: new Date(Date.now()),
    booked: true,
    favorited: false,
    //added default dateRange
    dateRange: []
  },
  {
    username: "testerTriper",
    guide: false,
    desc: "this is a trip to test the app",
    location: "Wyoming",
    date: new Date(Date.now()),
    booked: false,
    favorited: true,
    dateRange: []
  }
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
