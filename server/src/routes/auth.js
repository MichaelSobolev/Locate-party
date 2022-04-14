const router = require("express").Router();
const passport = require("passport");
require("../../passport.js");
require("dotenv").config();
const { User } = require("../db/models");


async function createUser(userObj) {
  let status = 201
  const userExist = await checkIfUserExists(userObj.id)
  if (!userExist) {
    try {
      User.create({
        name: userObj.displayName,
        email: userObj.emails[0].value,
        googleId: userObj.id,
        picture_link: userObj.photos[0].value,
        isAdmin: false
      })

    } catch (err) {
      console.log('Error in userCreation. auth.js', err);
    }
  } else {
    status = 200
  }
  return status
}

async function checkIfUserExists(googleId) {
  let response;
  try {
    const userExists = await User.findOne({ where: { googleId }, raw: true })

    if (userExists) {
      response = true
    } else {
      response = false
    }
  } catch (err) {
    console.log('Error in user existance verification. auth.js', err);
  }
  return response
}

router.get("/login/success", async (req, res) => {
  console.log(`Backend: User Google login`)
  // console.log(req.user.id);
  if (req.user) {
    const status = await createUser(req.user)
    res.status(status).json({
      success: true,
      message: "successfull",
      user: {
        name: req.user.displayName,
        email: req.user.emails[0].value,
        googleId: req.user.id,
        picture_link: req.user.photos[0].value,
        isAdmin: false
      },
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  req.session = null;

  res.sendStatus(200);
});

router.get("/google", passport.authenticate("google", { scope: ["profile", 'email'] }));



router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;


