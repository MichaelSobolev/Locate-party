import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Button } from "../../components/Button/Button";
import { PlayersList } from "../../components/PlayersList/PlayersList";
import { getPlayersByPost } from "../../redux/actions/players.actions";
import { getPost } from "../../redux/actions/posts.actions";
import { Chat } from "./Chat/Chat";

import styles from "./styles.module.css";
export const GameRoomPage = () => {
  let oleg = {
    uri: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
  };

  let [post, setPost] = useState({
    title: "",
    system_title: "",
    requirements: "",
    description: "",
  });
  const [isAuthor, setIsAuthor] = useState(false);

  console.log("STATE_POST", post);
  console.log("STATE_POST.title", post?.title);
  const { id } = useParams();
  const navigate = useNavigate();
  const fetchedPost = useSelector((state) => state.currentPostStore);
  console.log(fetchedPost?.title);
  const postPlayers = useSelector((state) => state.currentGameRoom);
  console.log(postPlayers)
  const players = postPlayers.map((user) => {
    console.log('Players_map', user)
    console.log('User', user?.user_to_player)
    return { name: "user", link: `/user-page/${user.player_id}` };
  });

  let user_info = useSelector((state) => state.user_info.user_id);
  user_info = user_info ? user_info : false;

  let user = {
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlayersByPost(id));
    dispatch(getPost(id));
  }, []);

  useEffect(() => {
    setPost(fetchedPost);
    if (user_info === post.master_id) {
      console.log(user_info === post?.master_id);
      setIsAuthor(true);
    }
  }, [fetchedPost]);

  useEffect(() => {
    console.log("POST", post);
    console.log("POST.title2", post?.title);
    // parsePost(post)
  }, [post]);
  return (
    <div className={styles.main_container_column}>
      <div className={styles.game_description_container}>
        <img
          className={styles.game_master_icon}
          src={
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          }
          alt={"Master"}
          onClick={() => console.log("Click on gamemaster icon!")}
        />
        <div className={styles.flex_container_column}>
          <div className={styles.outer_box}></div>
          <div>
            <span className={styles.bold}>Комната игры:</span>
            <span>{post?.title}</span>
          </div>
          <div>
            <span className={styles.bold}>Игровая система:</span>
            <span>{post?.system_title}</span>
          </div>
          <div>
            <span className={styles.bold}> Требования к игрокам:</span>
            <span>{post?.requirements}</span>
          </div>
          <div>
            <span className={styles.bold}> Описание:</span>
            <span>{post?.description}</span>
          </div>
        </div>
      </div>
      <div className={styles.gameTime}>
        {" "}
        Время игры: 01/02/2013 Четверг 12.00
      </div>
      <div className={styles.chat_and_players}>
        <div className={styles.flex_container_row}>
          <div className={styles.players}>
            <div className={styles.flex_container_column}>
              <ul className={styles.ul}>
                {players.map((el) => {
                  console.log('------',el)
                  return (
                    <li className={styles.li} onClick={() => navigate(el.link)}>
                      {" "}
                      <img
                        className={styles.img}
                        src={oleg.uri}
                        width="80%"
                      />{" "}
                      {el.name}{" "}
                    </li>
                  );
                })}
                
                
                
                
              </ul>
            </div>
          </div>
          <div className={styles.chat}>
            <Chat />
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.Button}></div>
          <div>
            <Button
              className={styles["new-post-page__new-post-form-submit-button"]}
            >
              Игроки в ожидании
            </Button>
            <Button
              className={styles["new-post-page__new-post-form-submit-button"]}
            >
              Установить дату игры
            </Button>
          </div>
          <div>
            <Button
              className={styles["new-post-page__new-post-form-submit-button"]}
            >
              Редактировать
            </Button>
            <Button
              className={styles["new-post-page__new-post-form-submit-button"]}
            >
              Удалить обьявление
            </Button>
          </div>
        </div>
      </div>
      <div>
        <PlayersList id={id} />
      </div>
    </div>
  );
};
