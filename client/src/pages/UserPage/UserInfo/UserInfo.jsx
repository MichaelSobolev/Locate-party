import React, { useEffect } from "react";
import { Avatar } from "../../../components/Avatar/Avatar";
import { Title } from "../../../components/Title/Title";
import styles from "./styles.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addInfoFetch,
  getUserDataByGoogleId,
} from "../../../redux/actions/user.actions";
import { ButtonAll } from "../../../components/ButtonAll/ButtonAll";
import { useNavigate } from "react-router";

export const UserInfo = ({ namee, picture_linke, emaile, className = "" }) => {
  const navigate = useNavigate();
  const session = useSelector((state) => state.session);
  const userInfo = useSelector((state) => state.userData);

  const [name, setName] = useState(session?.name);
  const [email, setEmail] = useState(session?.email);
  const [picture_link, setpicture_link] = useState(session?.picture);
  const [age, setAge] = useState(userInfo?.age);
  const [gender, setGender] = useState(userInfo?.gender);
  const [experience, setExperience] = useState(userInfo?.experience);
  const [timezone, setTimezone] = useState(userInfo?.timezone);
  const [prefered_schedule, setPrefered_schedule] = useState(
    userInfo?.prefered_schedule
  );
  const [textarea, setTextarea] = useState(userInfo?.textarea);
  const [isInfoAdded, setIsInfoAdded] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      googleId: session.googleId,
      name: name,
      email: email,
      picture_link: picture_link,
      age: age,
      gender: gender,
      experience: experience,
      timezone: timezone,
      prefered_schedule: prefered_schedule,
      textarea: textarea,
    };
    dispatch(addInfoFetch(obj));
    navigate("/user-page");
  };

  useEffect(() => {
    setName(userInfo?.name);
    setpicture_link(session?.picture_link);
    setAge(userInfo?.age);
    setGender(userInfo?.gender);
    setEmail(session?.email);
    setExperience(userInfo?.experience);
    setTimezone(userInfo?.timezone);
    setPrefered_schedule(userInfo?.prefered_schedule);
    setTextarea(userInfo?.textarea);
  }, []);

  useEffect(() => {
    if (session) {
      dispatch(getUserDataByGoogleId(session.googleId));
    }
  }, [dispatch, session]);

  return (
    <>
      <div className={`${styles["input-container"]}`}>
        <section className={`${styles["user-info"]} ${className}`}>
          <Avatar
            className={styles["user-info__avatar"]}
            src={picture_link}
            alt={`Фотография пользователя ${name}`}
            size="xl"
          />
          <h2 className="visually-hidden">Информация о пользователе {name}</h2>
          <div className={styles["user-info__name-email-wrapper"]}>
            <Title className={styles["user-info__name"]}>{name}</Title>
            <span className={styles["user-info__email"]}>{email}</span>
          </div>
        </section>

        <div className={styles.divinfo}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={`${styles["form__group"]} ${styles.field}`}>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                id="name"
                name="name"
                placeholder="name"
                className={styles.form__field}
                maxLength={30}
              />
              <label for="name" className={styles.form__label}>
                Ник:
              </label>
            </div>

            <div className={`${styles["form__group"]} ${styles.field}`}>
              {/* <input
                type="text"
                onChange={(e) => setpicture_link(e.target.value)}
                value={picture_link}
                placeholder="Ссылка на фото профиля"
                className={styles.form__field}
              />
              <label for="picture_link" className={styles.form__label}>
                Url для фото:
              </label> */}
            </div>
            <div className={`${styles["form__group"]} ${styles.field}`}>
              <input
                type="number"
                onChange={(e) => setAge(e.target.value)}
                value={age}
                placeholder="Возраст:"
                className={styles.form__field}
                min={1}
                max={125}
              />
              <label for="age" className={styles.form__label}>
                Возраст:
              </label>
            </div>
            <div className={`${styles["form__group"]} ${styles.field}`}>
              <input
                type="text"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                placeholder="Пол:"
                className={styles.form__field}
                maxLength={30}
              />
              <label for="gender" className={styles.form__label}>
                Пол:
              </label>
            </div>

            <div className={`${styles["form__group"]} ${styles.field}`}>
              <input
                type="text"
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                placeholder="Ваш опыт в НРИ:"
                className={styles.form__field}
                maxLength={200}
              />
              <label for="experience" className={styles.form__label}>
                Ваш опыт в НРИ:
              </label>
            </div>
            <div className={`${styles["form__group"]} ${styles.field}`}>
              <input
                type="text"
                onChange={(e) => setTimezone(e.target.value)}
                value={timezone}
                placeholder="Часовой пояс"
                className={styles.form__field}
              />
              <label for="timezone" className={styles.form__label}>
                Часовой пояс:
              </label>
            </div>
            <div className={`${styles["form__group"]} ${styles.field}`}>
              <input
                type="text"
                onChange={(e) => setPrefered_schedule(e.target.value)}
                value={prefered_schedule}
                placeholder="Предпочитаемый график:"
                className={styles.form__field}
                maxLength={100}
              />
              <label for="prefered schedule" className={styles.form__label}>
                Предпочитаемый график:
              </label>
              <textarea
                value={textarea}
                onChange={(e) => setTextarea(e.target.value)}
                className={`${styles.form__field} ${styles.form__field_for_area} ${styles.form__bio}`}
                placeholder="О себе:"
                maxLength={500}
              />
            </div>
            <ButtonAll type="submit" value={"Подтвердить изменения"} />
          </form>
        </div>
      </div>
    </>
  );
};
