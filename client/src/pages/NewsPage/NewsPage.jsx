import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../redux/actions/news.action";
import { PostList } from "../AnnouncementsPage/PostList/PostList";
import styles from "./styles.module.css";

export const NewsPage = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const parsedPosts = news.map((el) => {
    const newPost = {
      ...el,
      name: el?.creator?.name,
      icon: el?.creator?.image,
      button: true,
    };

    return newPost;
  });

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div className={styles["announcements-page"]}>
      <h2 className="visually-hidden"> 123</h2>
      <section className={styles["announcements-page__posts"]}>
        <PostList posts={parsedPosts} />
      </section>
    </div>
  );
};
