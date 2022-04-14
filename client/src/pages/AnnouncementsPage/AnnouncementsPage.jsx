import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PostList } from "./PostList/PostList";
import { Header } from "./Header/Header";
import { getPosts } from "../../redux/actions/posts.actions";
import styles from "./styles.module.css";

export const AnnouncementsPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const parsedPosts = posts.map((el) => {
    const newPost = {
      ...el,
      name: el?.author?.name,
      icon: el?.author?.picture_link,
      gameSystem: el?.System?.title,
      button: true,
    };
    return newPost;
  });

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className={styles["announcements-page"]}>
      <h2 className="visually-hidden"> AnnouncementsPage</h2>
      <Header />
      <section className={styles["announcements-page__posts"]}>
        <PostList posts={parsedPosts} short />
      </section>
    </div>
  );
};
