import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { ButtonPost } from "../../components/PostCard/ButtonPost/ButtonPost";
import { PostCard } from "../../components/PostCard/PostCard";
import { getPost } from "../../redux/actions/posts.actions";
import { PostList } from "../AnnouncementsPage/PostList/PostList";
import styles from "./styles.module.css";

export const PostPage = () => {
  const navigate = useNavigate();
  const [isPostExist, setIsPostExist] = useState(false);
  const [parsedPost, setParsedPost] = useState(null);
  const [isPostloaded, setIsPostLoaded] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.currentPostStore);
  const session = useSelector((state) => state.session);

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
    fetch(`${process.env.REACT_APP_API_ADRESS}/`);
    // const user_id = session[0].id;
    const user_id = session[0]  
    console.log("session user_id", user_id);
    // dispatch()
    // navigate(`/announcements/interview/${post_id}/${user_id}`);
    console.log("123123");
  }

  function editButtonVerification() {
    // const author = parsedPost; // ["name"];
    // const userName = session[0];
    // console.log("author", author, "userName", userName);

    // if (author === userName) {
    //   setIsPostExist(true);
    // }
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
  }, [post]);

  useEffect(() => {
    if (parsedPost) {
      editButtonVerification();
    }
  }, [parsedPost]);
  // console.log(12312313123,  parsedPost);
  return (
    <div className={styles.post_normalize}>
      {/* {isPostExist && <PostList posts={[parsedPost]} />} */}
      {isPostExist && <PostCard props={parsedPost} />}
      <div className={styles.horizontal_box}>
        <div className={styles.button}>
          {isPostloaded && (
            <ButtonPost isNavigation={false} action={join} id={parsedPost.id}>
              Присоединиться
            </ButtonPost>
          )}
        </div>
        <div className={styles.button}>
          {isPostExist && (
            <ButtonPost path="/announcements/edit/" id={parsedPost.id}>
              Редактировать
            </ButtonPost>
          )}
        </div>
      </div>
      {/* <div>
        {isPostloaded && (
          <ButtonPost path="/announcements/edit/" id={parsedPost.id}>
            Присоединиться
          </ButtonPost>
        )}
        {isPostExist && (
          <ButtonPost path="/announcements/edit/" id={parsedPost.id}>
            Отправить
          </ButtonPost>
        )}
      </div> */}
    </div>
  );
};
