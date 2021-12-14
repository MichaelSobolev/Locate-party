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

    // Article.create({ ...req.body, isActive: true, isPaid: false, master_id: 1 });
    res.sendStatus(200);
  });

module.exports = router;
