// import React, { useEffect } from "react";
// import { Avatar } from "../../../components/Avatar/Avatar";
// import { Title } from "../../../components/Title/Title";
// import styles from "./styles.module.css";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
// import {
//   addInfo,
//   addInfoFetch,
//   getUserIdByGoogleId,
// } from "../../../redux/actions/user.actions";

// const [isInfoAdded, setIsInfoAdded] = useState(false);
// const dispatch = useDispatch();
// const session = useSelector((state) => state.session);
// let user_info = useSelector((state) => state.user_info.user_id);
// console.log(session[0]);
// user_info = user_info ? user_info : false;

// const obj = {
//   //id: uuidv4(),
//   googleId: session[0].id,
//   name: name,
//   email: email,
//   image: image ? image : session[0].photos[0].value,
//   age: age,
//   gender: gender,
//   experience: experience,
//   timezone: timezone,
//   prefered_schedule: prefered_schedule,
//   textarea: textarea,
// };
// dispatch(addInfoFetch(obj));
// dispatch(addInfo(obj));
// fetch(`http://localhost:5000/users/db`, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   credentials: "include",
//   body: JSON.stringify(obj),
// });
// // const userTrueId = await response.json();
// // console.log(userTrueId);
// // };
// let counter = 0;
// useEffect(() => {
//   counter++;
//   console.log("counter", counter);
//   if (session[0]?.id) {
//     dispatch(getUserIdByGoogleId(session[0].id));
//   }
// }, [session]);
// return (
//   <>
//     <section className={`${styles["user-info"]} ${className}`}>
//       <h2 className="visually-hidden">Информация о пользователе {name}</h2>
//       <Avatar
//         className={styles["user-info__avatar"]}
//         src={image}
//         alt={`Фотография пользователя ${name}`}
//         size="xl"
//       />
//       <div className={styles["user-info__name-email-wrapper"]}>
//         <Title className={styles["user-info__name"]}>{name}</Title>
//         <span className={styles["user-info__email"]}>{email}</span>
//       </div>
//     </section>
//   </>
// );

// // - age Возраст (integer)
// // - gender Пол
// // - experience Опыт
// // - timezone Часовой пояс
// // - prefered_schedule Предпочитаемый график
// // - Как предпочитаете играть:
// // Чекбоксы: голосом, текстом, с камерой или без, ролл20, Foundry, TTS или другое?
// // - system Предпочитаемая игровая система (селектор с вариантами из Systems.title)
// // - messenger Ссылка на discord/другой мессенджер
// // - alignment Мировоззрение ( селектор со строками: ЗД, НД, ХД, ЗН, ИН, ХН, ЗЗ, НЗ, ХЗ)
// // - BIO  о себе
