const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session)

const path = require("path");
const mongoose = require("mongoose");
//which one?!
const routes = require("./routes");
//const router = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const store = new MongoDBStore({
  uri: process.env.MONGODB_URI || "mongodb://localhost/whyadventure",
  //databaseName: "whyadventure",
  collection: "sessions",
  //collection: "users"
});

store.on('error', (error) => {
  console.log(error);
});


app.use(session({
  secret: "This is a super secure secret",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  },
  store: store,
  resave: true,
  saveUninitialized: true
}))

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
//which one?!
app.use(routes);
//app.use(router);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/whyadventure"
)
.then(() => console.log("MongoDB successfully connected"))
//.catch((e) => console.log(e))

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
