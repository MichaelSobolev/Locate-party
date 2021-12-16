import React from "react";
import { Avatar } from "../../../components/Avatar/Avatar";
import { Title } from "../../../components/Title/Title";
import styles from "./styles.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addInfo, addInfoFetch } from "../../../redux/actions/user.actions";

export const UserInfo = ({ namee, imagee, emaile, className = "" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [timezone, setTimezone] = useState("");
  const [prefered_schedule, setPrefered_schedule] = useState("");
  const [textarea, setTextarea] = useState("");

  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);
  console.log(session[0]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      //id: uuidv4(),
      googleId: session[0].id,
      name: name,
      email: email,
      image: image ? image : session[0].photos[0].value,
      age: age,
      gender: gender,
      experience: experience,
      timezone: timezone,
      prefered_schedule: prefered_schedule,
      textarea: textarea,
    };
    dispatch(addInfoFetch(obj))
    // dispatch(addInfo(obj));
    // fetch(`http://localhost:5000/users/db`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "include",
    //   body: JSON.stringify(obj),
    // })
    // const userTrueId = await response.json();
    // console.log(userTrueId);
  };

  return (
    <>
      <section className={`${styles["user-info"]} ${className}`}>
        <h2 className="visually-hidden">Информация о пользователе {name}</h2>
        <Avatar
          className={styles["user-info__avatar"]}
          src={image}
          alt={`Фотография пользователя ${name}`}
          size="xl"
        />
        <div className={styles["user-info__name-email-wrapper"]}>
          <Title className={styles["user-info__name"]}>{name}</Title>
          <span className={styles["user-info__email"]}>{email}</span>
        </div>
      </section>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="name"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
        />
        <input
          type="text"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          placeholder="image"
        />
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          placeholder="age"
        />
        <input
          type="text"
          onChange={(e) => setGender(e.target.value)}
          value={gender}
          placeholder="gender"
        />
        <input
          type="text"
          onChange={(e) => setExperience(e.target.value)}
          value={experience}
          placeholder="experience"
        />
        <input
          type="text"
          onChange={(e) => setTimezone(e.target.value)}
          value={timezone}
          placeholder="timezone"
        />
        <input
          type="text"
          onChange={(e) => setPrefered_schedule(e.target.value)}
          value={prefered_schedule}
          placeholder="prefered schedule"
        />
        <textarea
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
        />
        <button type="submit">add info</button>
      </form>
    </>
  );
};

// - age Возраст (integer)
// - gender Пол
// - experience Опыт
// - timezone Часовой пояс
// - prefered_schedule Предпочитаемый график
// - Как предпочитаете играть:
// Чекбоксы: голосом, текстом, с камерой или без, ролл20, Foundry, TTS или другое?
// - system Предпочитаемая игровая система (селектор с вариантами из Systems.title)
// - messenger Ссылка на discord/другой мессенджер
// - alignment Мировоззрение ( селектор со строками: ЗД, НД, ХД, ЗН, ИН, ХН, ЗЗ, НЗ, ХЗ)
// - BIO  о себе
