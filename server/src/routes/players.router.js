const express = require("express");

const { Post, User, Player, PendingPlayer, BlackList } = require('../db/models');


const router = express.Router();


router.route("/pending/accept/:id")
  .post(async (req, res) => {
    // Добавляет пользователи в players
    // TODO Check if user in blacklist
    try {
      const { id } = req.params;
      const { user_id } = req.body
      console.log('user_id: ', user_id)
      // TODO check is remove a right method
      await PendingPlayer.destroy({ where: { user_id, post_id: id } })
      await Player.create(
        { user_id, post_id: id }
      );
      res.status(201)
    } catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  })

router.route("/pending/decline/:id")
  .post(async (req, res) => {
    try {
      const { id } = req.params;
      const { user_id } = req.body
      // TODO check is remove a right method
      await PendingPlayer.destroy({ where: { user_id, post_id: id } })
      await BlackList.create(
        { ...req.body, post_id: id }
      );
      res.status(201)
    } catch (error) {
      res.sendStatus(500)
    }

  })



router.route("/pending/:id")
  .get(async (req, res) => {
    // Полчение всех юзеров в ожидании для поста по id
    try {
      const { id } = req.params;
      const postPlayers = await PendingPlayer.findAll({
        include: [
          {
            model: User,
          },
          {
            model: Post,
          },
        ],
        where: { id },
        raw: true,
      });
      console.log(postPlayers);
      res.status(200).json(postPlayers);
    } catch (err) {
      res.sendStatus(500)
    }
  })
  .post(async (req, res) => {
    // Добавление связки post_id - user_id в ожидание
    // TODO Добавить проверку по наличию в BlackList
    try {
      const { id } = req.params;
      await PendingPlayer.create(
        { ...req.body, post_id: id }
      );
      res.status(201)
    } catch (err) {
      res.sendStatus(500)
    }
  })



router.route("/:id")
  .get(async (req, res) => {
    // Полчение всех юзеров поста по id
    try {
      const { id } = req.params;

      let postPlayers = await Post.findAll({
        include: [
          {
            model: User,
            through: { attributes: ['post_id'] }
          },
        ],
        where: { id },
        raw: true,
      });
      postPlayers = postPlayers.map(el => {
        return {
          ...el,
          player_name: el["Users.name"],
          player_icon: el["Users.image"],
          player_id: el["Users.id"],
          player_id_google:el["Users.googleId"],
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
