const { Post, User, System } = require('../db/models');

const express = require('express');

const router = express.Router();
router.route('/system').post(async (req, res) => {
  const { system } = req.body;

  const seedSys = [{
    title: 'D&D5e'
  },
  { title: 'D&D3.5' },
  {
    title: 'Pathfinder',
  },
  {
    title: 'VtM',
  },
  {
    title: 'Starfinder',
  }]
  seedSys.forEach(async (el) => {
    await System.create({ title: el.title });
  })
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
      });
      console.log(posts);
      res.status(200).json(posts);
    } catch (err) {
      res.sendStatus(500)
    }
  })
  .post((req, res) => {
    try {
      console.log('_!_!_!_!_!_!_!POST_BACKEND', { ...req.body, isActive: true, isPaid: false });
      Post.create({ ...req.body, isActive: true, isPaid: false });
     





      res.sendStatus(200);
    } catch (error) {
      console.log('===ERROR===', error, '=======')
      res.sendStatus(500)
    }
  });


router.route('/:id')
  .get(async (req, res) => {
    try{
    const { id } = req.params;
    const post = await Post.findOne({
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
    res.status(200).json({
      ...post, system_title: post['System.title']
    });
  }catch(err){
    res.sendStatus(500)
  }
  }).put(async (req, res) => {
    console.log('==============')
    console.log(req.body)
    const { id } = req.params;
    const newData = req.body
    console.log(id, newData)

    await Post.update({ ...newData }, { where: { id } })
    res.sendStatus(200)
  })

module.exports = router;

