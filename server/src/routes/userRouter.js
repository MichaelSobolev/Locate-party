const express = require("express");
const { User } = require("../db/models");
const router = express.Router();

router.route("/db").post(async (req, res) => {
  const request = await User.create({ ...req.body })
  console.log({ user_id: request.dataValues.id })
  res.status(201).json({ user_id: request.dataValues.id })
});

router.route("/").post(async (req, res) => {
  try {
    console.log("REQ.SESSION >>>>>>>>>>>>>>>", req.session);


    res.json(req.session.passport.user);

  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
