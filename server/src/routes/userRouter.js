const express = require("express");
const { User } = require("../db/models");
const router = express.Router();

router.route("/db").post(async (req, res) => {
  const request = await User.create({ ...req.body })
  console.log({ user_id: request.dataValues.id })
  res.status(201).json({ user_id: request.dataValues.id })
});

router.route("/update").post(async (req, res) => {
  const { googleId, age } = req.body
  // const userToUpdate = await User.findOne({ where: { googleId }, raw: true })
  // console.log(newValues);
  await User.update({ ...req.body, age: Number(age) }, { where: { googleId } })
  // console.log({ user_id: request.dataValues.id })
  res.sendStatus(201) //.json({ user_id: request.dataValues.id })
});

router.route("/getProfileInfo/:googleId").get(async (req, res) => {
  const { googleId } = req.params;

  const user = await User.findOne({ where: { googleId } })

  res.status(200).json(user)
});

router.route("/getProfileInfo/userId/:id").get(async (req, res) => {
  const { id } = req.params;
  console.log('id-----------', id);

  const user = await User.findOne({ where: { id } })

  res.status(200).json(user)
});

router.route("/").post(async (req, res) => {
  try {

    res.json(req.session.passport.user);

  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
