import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/posts.actions";
import styles from "./AnnouncementsPage.module.css";

export const AnnouncementsPage = () => {
  const dispatch = useDispatch();
  const userName = null;
  const posts = useSelector((state) => state.posts);
  console.log(">>>>", posts);
  const parsedPosts = posts.map((el) => {
    const newPost = {
      ...el,
      name: el.author.name,
      icon: el.author.image,
      tags: el.System.title,
    };
    return newPost;
  });
  console.log(">>>>", parsedPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <main>
      <h2> AnnouncementsPage</h2>
      <div className={styles.PseudoHeader}>
        <p>Hello {userName ? userName : "UserName"}</p>
        <input type="text" id="search" placeholder="Search..." />
        <button>Add new post</button>
      </div>
      <section className={styles.PostsBody}>
        {parsedPosts.map((el) => {
          return <div key={Date.now()}>{el.title}</div>;
        })}
      </section>
    </main>
  );
};
