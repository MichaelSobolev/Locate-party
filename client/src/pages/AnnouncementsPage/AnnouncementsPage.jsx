import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { PostCard } from "../../components/PostCard/PostCard";
import {PostList} from './PostList/PostList';
import {Header} from './Header/Header';
import { getPosts } from "../../redux/actions/posts.actions";
import styles from "./styles.module.css";

export const AnnouncementsPage = () => {
  const dispatch = useDispatch();
  const userName = null;
  const posts = useSelector((state) => state.posts);
  const parsedPosts = posts.map((el) => {
    const newPost = {
      ...el,
      name: el.author.name,
      icon: el.author.image,
      tags: el.System.title,
      button: true,
    };
    return newPost;
  });

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className={styles['announcements-page']}>
      <h2 className="visually-hidden"> AnnouncementsPage</h2>
      <Header />
      <section className={styles['announcements-page__posts']}>
        <PostList posts={parsedPosts} />
      </section>
    </div>
  );
};
