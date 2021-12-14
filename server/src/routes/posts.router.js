const { Post, User, System } = require('../db/models');

const express = require('express');

const router = express.Router();
router.route('/system').post(async (req, res) => {
  const { system } = req.body;
  await System.create({ title: system });
  console.log(system);
  res.sendStatus(200);
});

router
  .route('/')
  .get(async (req, res) => {
    try {
      const posts = await Post.findAll({
        include: [
          {
            model: User,
            as: 'author',
          },
          {
            model: System,
          },
        ],
      });  User.hasMany(models.Post, { foreignKey: "master_id" });
      User.hasMany(models.Article, { foreignKey: "author_id" });
      console.log(posts);
      res.status(200).json(posts);
    } catch (err) {
      res.sendStatus(500)
    }

  })
  .post((req, res) => {
    console.log({ ...req.body, isActive: true, isPaid: false, master_id: 1 });
    //res.render('index')
    Post.create({ ...req.body, isActive: true, isPaid: false, master_id: 1 });
    res.sendStatus(200);
  });

router.route('/:id')
  .get(async (req, res) => {

    const { id } = req.params;
    const post = await Post.findAll({
      include: [
        {
          model: User,
          as: 'author',
        },
        {
          model: System,
        },
      ],
      where: { id },
      raw: true,
    });
    console.log(post);
    res.status(200).json(post[0]);
  }).put(async (req, res) => {
    console.log('==============')
    console.log(req.body)
    const { id } = req.params;
    const newData = req.body
    console.log(id, newData)
    // const post = await Post.update(newData, { where: id }
    // )
    await Post.update({ ...newData }, { where: { id } })
    // console.log(post);
    // res.status(200).jsson(post[0]);
    res.sendStatus(200)
  })

module.exports = router;

