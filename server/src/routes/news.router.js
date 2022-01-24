const { Article, User } = require('../db/models');

const express = require("express");

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    try {
      const posts = await Article.findAll({
        include: [
          {
            model: User,
            as: 'creator',
          },
        ],
      });
      console.log(posts);
      res.status(200).json(posts);
    } catch (err) {
      res.sendStatus(500)
    }

  })
  .post(async (req, res) => {
    await Article.create({
      author_id: 1,
      title: "NEWPOST",
      body: 'blablablablablabla',
      article_image: '',
      data_store: {}
    });

    res.sendStatus(200);
  });


module.exports = router;
