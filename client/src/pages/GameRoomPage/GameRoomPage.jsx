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
  // eslint-disable-next-line no-unused-vars
  const [isAuthor, setIsAuthor] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const fetchedPost = useSelector((state) => state.currentPostStore);
  const postPlayers = useSelector((state) => state.currentGameRoom);
  const players = postPlayers.map((user) => {
    return {
      name: user["user_to_player.name"],
      link: `/user-page/${user["user_to_player.id"]}`,
      ...user,
    };
  });

  let user_info = useSelector((state) => state.user_info.user_id);
  user_info = user_info ? user_info : false;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlayersByPost(id));
    dispatch(getPost(id));
  }, [dispatch, id]);

  useEffect(() => {
    setPost(fetchedPost);
    if (user_info === post.master_id) {
      setIsAuthor(true);
    }
  }, [fetchedPost, post.master_id, user_info]);

  useEffect(() => {
    // parsePost(post)
  }, [post]);
  return (
    <div className={styles.main_container_column}>
      <div className={styles.game_description_container}>
        <img
          className={styles.game_master_icon}
          src={fetchedPost["author.picture_link"]}
          alt={
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          }
          onClick={() => navigate(`/user-page/${fetchedPost["author.id"]}`)}
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
        Время игры: 01/02/2013 Четверг 12.00
      </div>
      <div className={styles.chat_and_players}>
        <div className={styles.flex_container_row}>
          <div className={styles.players}>
            <div className={styles.flex_container_column}>
              <ul className={styles.ul}>
                {players.map((el) => {
                  console.log("elllllll", el);
                  return (
                    <li className={styles.li} onClick={() => navigate(el.link)}>
                      <img
                        className={styles.img}
                        src={el["user_to_player.picture_link"]}
                        width="80%"
                        alt={"https://picsum.photos/200/300"}
                      />
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
      </div>
    </div>
  );
};
