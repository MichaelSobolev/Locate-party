import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/posts.actions";
import styles from "./AnnouncementsPage.module.css";

export const AnnouncementsPage = () => {
  const dispatch = useDispatch();
  const userName = null;
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    // <main >//className={styles.TemporaryMargin}>
    <main>
      <h2> AnnouncementsPage</h2>
      <div className={styles.PseudoHeader}>
        <p>Hello {userName ? userName : "UserName"}</p>
        <input type="text" id="search" placeholder="Search..." />
        <button>Add new post</button>
      </div>
      <section className={styles.PostsBody}>
        {posts.map((el) => {
          return (
            <div className={styles.Card} key={el.id}>
              <h2>Заголовок</h2>
              <div>
                {" "}
                <img src="/" alt="Иконка создателя" />{" "}
                <p>Имя создателя ({el.master_id})</p>
              </div>
              <div>
                <ul className={styles.Tags}>
                  <li className={styles.Tag}>D&D5e ({el.system_id})</li>
                </ul>
              </div>
              <div>
                <strong>Платформа:</strong>
                <p>{el.platform}</p>
              </div>
              <div>
                <strong>Описание:</strong>
              </div>
              <p>{el.description}</p>
              <button>Кнопка на страницу с описанием </button>
            </div>
          );
        })}
      </section>
    </main>
  );
};
