import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { deletePost } from "../../redux/actions/posts.actions";
import { Button } from "../Button/Button";
import styles from "./List.module.css";

export const List = ({ items, isAuthor, myIdmyId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteThisPost = (postId) => {
    dispatch(deletePost(myIdmyId, postId));
  };
  const redirectToEditPage = (post_id) => {
    navigate(`/announcements/edit/${post_id}`);
  };
  const redirectToAnnouncementPage = (post_id) => {
    navigate(`/announcements/${post_id}`);
  };
  const redirectToGameRoomPage = (post_id) => {
    navigate(`/gameroom/${post_id}`);
  };
  const redirectToInterviewListRoomPage = (post_id) => {
    navigate(`/interview/list/${post_id}`);
  };
  return (
    <ul className={styles["list"]}>
      {items.map(({ title, id }, index) => {
        return (
          <>
            <li key={index} className={styles["list__element"]}>
              <p className={styles["list__element-text"]}> {title} </p>
              <div lassName={styles["button-container"]}>
                <Button
                  size="s"
                  clickFunction={() => redirectToAnnouncementPage(id)}
                >
                  Посмотреть
                </Button>
                <Button
                  size="s"
                  clickFunction={() => redirectToGameRoomPage(id)}
                >
                  Войти
                </Button>
                {!isAuthor ? (
                  <>
                    <Button size="s" className="danger">
                      Покинуть игру
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      size="s"
                      className="edit
                    "
                      clickFunction={() => redirectToInterviewListRoomPage(id)}
                    >
                      Собеседования
                    </Button>
                    <Button
                      size="s"
                      className="edit"
                      clickFunction={() => redirectToEditPage(id)}
                    >
                      Редактировать
                    </Button>
                    <Button
                      size="s"
                      className="danger"
                      clickFunction={() => deleteThisPost(id)}
                    >
                      Удалить
                    </Button>
                  </>
                )}
              </div>
            </li>
          </>
        );
      })}
    </ul>
  );
};
