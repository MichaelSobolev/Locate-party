import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { ButtonPost } from "../../components/PostCard/ButtonPost/ButtonPost";
import { PostCard } from "../../components/PostCard/PostCard";
import { addPendingPlayer } from "../../redux/actions/players.actions";
import { getPost } from "../../redux/actions/posts.actions";
import { PostList } from "../AnnouncementsPage/PostList/PostList";
import styles from "./styles.module.css";

export const PostPage = () => {
  const navigate = useNavigate();
  const [isPostExist, setIsPostExist] = useState(false);
  const [parsedPost, setParsedPost] = useState(null);
  const [isPostloaded, setIsPostLoaded] = useState(false);
  const [isAuthor, setIsAuthor] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.currentPostStore);
  const session = useSelector((state) => state.session);
  let user_info = useSelector((state) => state.user_info.user_id);
  user_info = user_info ? user_info : false;

  function parsePost(post) {
    if (post) {
      setParsedPost({
        ...post,
        name: post["author.name"],
        icon: post["author.image"],
        tags: post["System.title"],
        button: false,
      });
    }
    return;
  }

  function join() {
    // На вход user_id | post_id
    const post_id = id;
    console.log(user_info)
    dispatch(addPendingPlayer({post_id, user_id:user_info}))
    navigate(`/announcements/interview/${post_id}/${user_info}`);
  }

  function editButtonVerification() {

    setIsPostExist(true);
  }
  useEffect(() => {
    dispatch(getPost(id));
  }, [session]);

  useEffect(() => {
    parsePost(post);

    if (post) {
      setIsPostLoaded(true);
    }
    if (user_info === post.master_id) {
      console.log(user_info === post?.master_id);
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
          {isPostloaded && user_info ? (
            <ButtonPost isNavigation={false} action={join} id={parsedPost.id}>
              Присоединиться
            </ButtonPost>
          ) : (
            <p>Идёт загрузка...</p>
          )}
        </div>
        <div className={styles.button}>
          {isAuthor && (
            <ButtonPost path="/announcements/edit/" props={parsedPost.id}>
              Редактировать
            </ButtonPost>
          )}
        </div>
      </div>
    </div>
  );
};
