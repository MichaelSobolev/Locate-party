import React, { useEffect } from "react";
import { Avatar } from "../../../components/Avatar/Avatar";
import { Title } from "../../../components/Title/Title";
import styles from "./styles.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addInfo, addInfoFetch, getUserIdByGoogleId } from "../../../redux/actions/user.actions";
import { ButtonAll } from "../../../components/ButtonAll/ButtonAll";


export const UserInfo = ({ namee, imagee, emaile, className = "" }) => {
  const UserItems = useSelector((state) =>
    state.session[0] 
  )
console.log(UserItems);

  const [name, setName] = useState(UserItems._json.name);
  const [email, setEmail] = useState(UserItems._json.email);
  const [image, setImage] = useState(UserItems._json.picture);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [timezone, setTimezone] = useState("");
  const [prefered_schedule, setPrefered_schedule] = useState("");
  const [textarea, setTextarea] = useState("");

  const [isInfoAdded, setIsInfoAdded] = useState(false)
  const dispatch = useDispatch();
  const session = useSelector((state) => state.session);
  let user_info = useSelector((state) => state.user_info.user_id);
  console.log(session[0]);
  user_info = user_info ? user_info : false;

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
    dispatch(addInfoFetch(obj));
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
  let counter = 0;
  useEffect(() => {
    counter++;
    console.log("counter", counter);
    if (session[0]?.id) {
      dispatch(getUserIdByGoogleId(session[0].id));
    }
  }, [session]);

  return (
    <>
      <section className={`${styles["user-info"]} ${className}`}>
        <Avatar
          className={styles["user-info__avatar"]}
          src={image}
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
          id = 'name'
          name = 'name'
          placeholder="name" 
          className={styles.form__field}
          
        />
          <label for="name" className={styles.form__label}>Name</label>
        </div>

        <div className={`${styles["form__group"]} ${styles.field}`}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="email"
          className={styles.form__field}
        />
         <label for="email" className={styles.form__label}>email</label>
        </div>
        <div className={`${styles["form__group"]} ${styles.field}`}>
        <input
          type="text"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          placeholder="image"
          className={styles.form__field}
        />
         <label for="image" className={styles.form__label}>Photo</label>
        </div>
        <div className={`${styles["form__group"]} ${styles.field}`}>
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          placeholder="age"
          className={styles.form__field}
        />
         <label for="age" className={styles.form__label}>age</label>
        </div>
        <div className={`${styles["form__group"]} ${styles.field}`}>
        <input
          type="text"
          onChange={(e) => setGender(e.target.value)}
          value={gender}
          placeholder="gender"
           className={styles.form__field}
        />
         <label for="gender" className={styles.form__label}>gender</label>
        </div>

        <div className={`${styles["form__group"]} ${styles.field}`}>
        <input
          type="text"
          onChange={(e) => setExperience(e.target.value)}
          value={experience}
          placeholder="experience"
          className={styles.form__field}
        />
         <label for="experience" className={styles.form__label}>experience</label>
        </div>
        <div className={`${styles["form__group"]} ${styles.field}`}>
        <input
          type="text"
          onChange={(e) => setTimezone(e.target.value)}
          value={timezone}
          placeholder="timezone"
          className={styles.form__field}
        />
         <label for="timezone" className={styles.form__label}>timezone</label>
        </div>
        <div className={`${styles["form__group"]} ${styles.field}`}>
        <input
          type="text"
          onChange={(e) => setPrefered_schedule(e.target.value)}
          value={prefered_schedule}
          placeholder="prefered schedule"
          className={styles.form__field}
        />
         <label for="prefered schedule" className={styles.form__label}>prefered schedule</label>
         {/* <div className={`${styles["form__group"]} ${styles.field}`}> */}
        <textarea
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
          className={`${styles.form__field} ${styles.form__field_for_area}`}
          placeholder='about you'
        />
        
         </div>
        {/* </div> */}
        <ButtonAll type="submit" value={'Send'}/>
      </form>
      </div>
    </>
  );
};
