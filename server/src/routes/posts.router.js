const { Post, User } = require('../db/models')

const express = require('express');

const router = express.Router();

router.route('/')
  .post((req, res) => {
    console.log({ ...req.body, isActive: true, isPaid: false, master_id: 1 });
    //res.render('index')
    Post.create({ ...req.body, isActive: true, isPaid: false, master_id: 1 })
    res.sendStatus(200)

  });

module.exports = router;
