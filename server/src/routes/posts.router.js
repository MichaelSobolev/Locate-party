const { Post, User, System, Player } = require('../db/models');

const express = require('express');

const router = express.Router();
router.route('/systems').get(async (req, res) => {
  try {
    const systems = await System.findAll({ raw: true });
    systems.forEach(system => {
      delete system.createdAt
      delete system.updatedAt
    });
    res.json(systems).status(200)
  } catch (err) {
    res.sendStatus(401);
  }
});

router.route('/systems/onlyNames').get(async (req, res) => {
  try {
    const systems = await System.findAll({ raw: true });
    const result = []
    systems.forEach(system => {
      result.push({
        text: system.title,
        value: system.title
      })


    });
    res.json(result).status(200)
  } catch (err) {
    res.sendStatus(401);
  }
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
      res.status(200).json(posts);
    } catch (err) {
      res.sendStatus(500)
    }
  })
  .post(async (req, res) => {
    try {
      const master = await User.findOne({ where: { googleId: req.body.master_id } })
      console.log('master_id - ', master.id);
      const gamesystem = await System.findOne({ where: { title: req.body.system_id }, raw: true })
      console.log({ ...req.body, isActive: true, master_id: master.id, system_id: gamesystem.id });
      Post.create({ ...req.body, isActive: true, master_id: master.id, system_id: gamesystem.id });

      res.sendStatus(201);
    } catch (error) {
      console.log('===ERROR===', error, '=======')
      res.sendStatus(500)
    }
  });





router.route('/myPosts/:googleId').get(async (req, res) => {
  try {
    const { googleId } = req.params;
    console.log(googleId);
    const posts = await Post.findAll({
      include: [{
        model: User,
        as: "author",
        where: { googleId }
      }],
      raw: true,
    });
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
})

router.route('/myPosts/asPlayer/:googleId').get(async (req, res) => {
  try {
    const { googleId } = req.params;
    const posts = await Player.findAll({
      include: [{
        model: User,
        as: "user_to_player",
        where: { googleId }
      },
      {
        model: Post,
        as: "post_to_player",
      }]
    })
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
})

router.route('/myPosts/asPlayer/pending/:googleId').get(async (req, res) => {
  try {
    const { googleId } = req.params;
    const posts = await Player.findAll({
      include: [{
        model: User,
        as: "user_to_player",
        where: { googleId }
      },
      {
        model: Post,
        as: "post_to_player",
        where: { isPending: true }
      }]
    })
    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.sendStatus(500)
  }
})


router.route('/:googleId/:id').delete(async (req, res) => {
  const { googleId, id } = req.params;
  try {
    const post = await Post.destroy({
      include: [
        {
          model: User,
          as: 'author',
          where: { googleId }
        }
      ],
      where: { id },
    });
    res.status(200).json(`${post} DeleteD!`);
  } catch (err) {
    res.sendStatus(500)
  }
})

router.route('/:id').get(async (req, res) => {
  try {
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
  } catch (err) {
    res.sendStatus(500)
  }
}).put(async (req, res) => {
  try {
    const { id } = req.params;
    await Post.update({ ...req.body }, { where: { id } })
    res.status(201).json(req.body)
  } catch (err) {
    console.log('posts');
    res.sendStatus(500)
  }
})


module.exports = router;

