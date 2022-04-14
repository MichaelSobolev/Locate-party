const express = require("express");

const { Post, User, Player, BlackList } = require('../db/models');


const router = express.Router();

router.route("/userId/:googleId").get(async (req, res) => {
  const { googleId } = req.params;
  console.log('googleId', googleId)
  try {
    const response = await User.findOne({ where: { googleId }, raw: true })
    res.status(200).json(response.id)
  } catch (error) {
    res.status(404).json(0)
  }
})
router.route("/user/:googleId").get(async (req, res) => {
  const { googleId } = req.params;
  try {
    const response = await User.findOne({ where: { googleId }, raw: true })
    delete response.googleId;
    delete response.isAdmin;
    delete response.email;
    res.status(200).json(response)
  } catch (error) {
    res.status(404).json(0)
  }
})
router.route("/pending/accept/:post_id")
  .post(async (req, res) => {
    // Добавляет пользователи в players
    // TODO Check if user in blacklist
    try {
      const { post_id } = req.params;
      const { user_id } = req.body
      await Player.update(
        { isPending: false }, { where: { post_id, user_id } }
      );
      res.status(201)
    } catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  })

router.route("/pending/decline/:post_id")
  .post(async (req, res) => {
    try {
      const { post_id } = req.params;
      const { user_id } = req.body
      await Player.update(
        { isPending: true }, { where: { post_id, user_id } }
      );
      res.status(201)
    } catch (error) {
      res.sendStatus(500)
    }

  })



router.route("/pending/:post_id")
  .get(async (req, res) => {
    // Полчение всех юзеров в ожидании для поста по id
    try {
      const { post_id } = req.params;

      let postPlayers = await Player.findAll({
        include: [{
          model: User,
          as: "user_to_player",
        },
        {
          model: Post,
          as: "post_to_player",
          where: { id: post_id }
        }],
        where: { isPending: true },
        raw: true,
      });
      postPlayers = postPlayers.map(el => {
        return {
          ...el,
          player_name: el["Users.name"],
          player_icon: el["Users.image"],
          player_id: el["Users.id"],
          player_id_google: el["Users.googleId"],
        }
      })
      res.status(200).json(postPlayers);
    } catch (err) {
      console.log(err)
      res.sendStatus(500)
    }
  })

  .post(async (req, res) => {
    // Добавление связки post_id - user_id в ожидание
    // TODO Добавить проверку по наличию в BlackList
    try {
      const { post_id } = req.params;
      await Player.create(
        { ...req.body, post_id, isPending: true }
      );
      res.status(201)
    } catch (err) {
      res.sendStatus(500)
    }
  })

router.route("/inteviews/byUser/:user_id")
  .get(async (req, res) => {

    try {
      const { user_id } = req.params;
      let interviews = await Player.findAll({
        include: [{
          model: User,
          as: "user_to_player",
          where: { id: user_id }
        },
        {
          model: Post,
          as: "post_to_player",
        }]
      })
      res.status(200).json(interviews)
    } catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  })

router.route("/:post_id")
  .get(async (req, res) => {
    // Полчение всех юзеров поста по id
    try {
      const { post_id } = req.params;

      let postPlayers = await Player.findAll({
        include: [
          {
            model: User,
            as: "user_to_player",
          },
        ],
        where: { post_id, isPending: false },
        raw: true,
      });
      postPlayers = postPlayers.map(el => {
        return {
          ...el,
          player_name: el["Users.name"],
          player_icon: el["Users.image"],
          player_id: el["Users.id"],
          player_id_google: el["Users.googleId"],
        }
      })
      res.status(200).json(postPlayers);
    } catch (err) {
      console.log(err)
      res.sendStatus(500)
    }
  })
  .delete(async (req, res) => {
    // Удаление юзера из комнаты
    try {
      const { id } = req.params;
      const { user_id } = req.body
      await Player.destroy({ where: { user_id, post_id: id } })
      res.status(201)
    } catch (err) {
      res.sendStatus(500)
    }
  })







module.exports = router;
