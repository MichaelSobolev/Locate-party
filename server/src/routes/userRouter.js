const express = require("express");
const { User } = require("../db/models");
const router = express.Router();

router.route("/db").post(async (req, res) => {
  // console.log("DBDBDBDBDBDBDBDBDBDB", req.body);
  const request = await User.create({ ...req.body })
  console.log({ user_id: request.dataValues.id })
  res.status(201).json({ user_id: request.dataValues.id })
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
    res.sendStatus(500)
  }
});

module.exports = router;
