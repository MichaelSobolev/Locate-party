const express = require("express");
const { User } = require("../db/models");
const router = express.Router();

router.route("/").post(async (req, res) => {
  const newUser = await User.create({
    name: req.body.displayName,
    email: "test",
    password: "test",
    googleId: req.body.id,
    image: req.body.photos[0].value,
    isAdmin: false,
  });
  res.send({
    id: Number(req.body.id),
    name: req.body.displayName,
    image: req.body.photos[0].value,
  });
});

module.exports = router;
