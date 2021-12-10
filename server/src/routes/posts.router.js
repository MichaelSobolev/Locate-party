const { Post, User, System } = require('../db/models')

const express = require('express');

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    // const posts = await Post.findAll({
    //   include: {
    //     model: User,

    //     // where: {
    //     //   user_id: master_id
    //     // }
    //   }

    // })

    // console.log(posts);
    res.status(200) // .json(posts)
  })
  .post((req, res) => {
    console.log({ ...req.body, isActive: true, isPaid: false, master_id: 1 });
    //res.render('index')
    Post.create({ ...req.body, isActive: true, isPaid: false, master_id: 1 })
    res.sendStatus(200)

  });

module.exports = router;


// User.create({
//   name: "Beb",
//   password: '123',
//   email: 'beb@mail.com',
//   image: 'https://us.123rf.com/450wm/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg?ver=6',
//   isAdmin: false
// })
// System.create({
//   title: 'D&D5e'
// })
