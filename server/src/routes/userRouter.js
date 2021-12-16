const express = require("express");
const { User } = require("../db/models");
const router = express.Router();

router.route("/db").post(async (req, res) => {
  console.log("DBDBDBDBDBDBDBDBDBDB", req.body);
  await User.create({
    name: req.body.name,
    email: req.body.email,
    image: req.body.image,
    age: req.body.age,
    gender: req.body.gender,
    experience: req.body.experience,
    timezone: req.body.timezone,
    prefered_schedule: req.body.prefered_schedule,
    textarea: req.body.textarea,
  });
});

router.route("/").post(async (req, res) => {
  //res.locals.user = req.session;
  try {
    console.log("REQ.SESSION >>>>>>>>>>>>>>>", req.session);

    // findOrCreate
    // await User.create({
    //   name: req.body.name,
    //   email: "test",
    //   password: "test",
    //   googleId: req.body.id,
    //   image: req.body.image,
    //   isAdmin: false,
    // });

    res.json(req.session.passport.user);
    //   {
    //   id: Number(req.body.id),
    //   name: req.body.name,
    //   image: req.body.image,
    // }
    //req.session.password.user.id
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
