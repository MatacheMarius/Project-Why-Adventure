const User = require("../../../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");
//const { db } = require("../models/User");
const db = require("../../../models");


// nicks version
// SIGNUP
router.post('/signup', async (req, res) => {
  try {
      const newUser = req.body;
      newUser.password = await bcrypt.hash(req.body.password, 10);
      const userData = await db.User.create(newUser);
      console.log("userData:")
      console.log(userData)
      //establish session when signed up
      req.session.save(() => {
          req.session.user_id = userData._id;
          req.session.logged_in = true;
          res.status(200).json({
              user_id: userData._id,
              username: userData.username
          });
          console.log("your session is saved at signup")
      });
    } catch (err) {
      console.error(err);
      res.status(400).json(err);
  }
});

//LOGIN
router.post('/login', async (req, res) => {
  try {
      const userData = await db.User.findOne({ email: req.body.email });

      if (!userData) {
          res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again' });
          return;
      }
      console.log("req.body.password")
      console.log(req.body.password);
      console.log("userData.password")
      console.log(userData.password)

      const validPassword = await bcrypt.compare(
          req.body.password,
          userData.password
      );

      if (!validPassword) {
          res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again' });
          return;
      }

      req.session.save(() => {
          req.session.user_id = userData._id;
          req.session.logged_in = true;
          console.log(userData.username, userData._id)
          res.json({ username: userData.username, user_id: userData._id, message: 'You are now logged in!' });
          console.log("your session is saved from login")
      });

  } catch (err) {
      console.error(err);
      res.status(400).json(err);
  }
});

//LOGOUT
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
      req.session.destroy(() => {
          res.status(204).end();
      });
      console.log("you are logged out")
  } else {
      res.status(404).end();
  }
});

router.get("/authenticatedUser", (req, res) => {
  if (req.session.logged_in) {
      res.status(200).json({ user_id: req.session.user_id })
  } else {
      res.status(204).end();
  }
})

module.exports = router;
