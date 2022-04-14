import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { ButtonPost } from "../../components/PostCard/ButtonPost/ButtonPost";
import { PostCard } from "../../components/PostCard/PostCard";
import { addPendingPlayer } from "../../redux/actions/players.actions";
import { getPost } from "../../redux/actions/posts.actions";
import {
  getUserDataByGoogleId,
  getUserIdByGoogleId,
} from "../../redux/actions/user.actions";
// import { PostList } from "../AnnouncementsPage/PostList/PostList";
import styles from "./styles.module.css";

export const PostPage = () => {
  const navigate = useNavigate();
  const [isPostExist, setIsPostExist] = useState(false);
  const [parsedPost, setParsedPost] = useState(false);
  const [isPostloaded, setIsPostLoaded] = useState(false);
  const [isAuthor, setIsAuthor] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.currentPostStore);
  const session = useSelector((state) => state.session);
  const userData = useSelector((state) => state.userData);

  function parsePost(post) {
    if (post) {
      setParsedPost({
        ...post,
        name: post["author.name"],
        icon: post["author.picture_link"],
        gameSystem: post["system_title"],
        button: false,
      });
    }
    return;
  }

  function join() {
    dispatch(
      addPendingPlayer({
        post_id: id,
        user_id: userData.id,
        master_id: post.master_id,
      })
    );
    navigate(`/announcements/interview/${id}/${userData.id}`);
  }

  function editButtonVerification() {
    setIsPostExist(true);
  }
  useEffect(() => {
    dispatch(getPost(id));
    dispatch(getUserDataByGoogleId(session.googleId));
  }, []);

  useEffect(() => {
    if (post) {
      parsePost(post);
      setIsPostLoaded(true);
    }
    if (post.master_id === userData.id) {
      setIsAuthor(true);
    }
  }, [post]);

  useEffect(() => {
    if (parsedPost) {
      editButtonVerification();
    }
  }, [parsedPost]);
  return (
    <div className={styles.post_normalize}>
      {isPostExist && <PostCard props={parsedPost} />}
      <div className={styles.horizontal_box}>
        <div className={styles.button}>
          {isPostloaded && session ? (
            <ButtonPost isNavigation={false} action={join} id={parsedPost.id}>
              Присоединиться
            </ButtonPost>
          ) : (
            <p>Идёт загрузка...</p>
          )}
        </div>
        <div className={styles.button}>
          {isAuthor && (
            <ButtonPost path="/announcements/edit/" id={id}>
              Редактировать
            </ButtonPost>
          )}
        </div>
      </div>
    </div>
  );
};
