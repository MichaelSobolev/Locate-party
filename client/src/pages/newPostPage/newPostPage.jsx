import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../components/Input/Input";
import useInput from "../../customHooks/inputHook";
import { createPost, getAuthorId } from "../../redux/actions/posts.actions";
import { Title } from "../../components/Title/Title";
import { Button } from "../../components/Button/Button";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export const NewPostPage = () => {
  const [userId, setUserId] = useState("123123");
  const [allowRender, setAllowRender] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const user_info = useSelector((state) => state.user_info.user_id);
  console.log("user_info=====", user_info);
  const messages = {
    image: 'Фотография',
    title: `Заголовок объявления`,
    system_id: `Игровая система (ID!) (TODO Добавить сюда селектор)`,
    schedule: `Удобное время и дни недели для проведения игр`,
    platform: `Необходимые для игры  программы/приложения`,
    requirements: `Требования к игрокам`,
    max_players: `максимальное количество игроков`,
    isPaid: `(TODO тут надо сделать свитч)`,
    pricing: `Это поле появляется только если свитч isPaid =true`,
    description: `Описание:`,
  };
  const inputs = [
    useInput({ name: "image", id: "image", label: messages.image }),
    useInput({ name: "title", id: "title", label: messages.title }),
    useInput({
      type: "number",
      name: "system_id",
      id: "system_id",
      label: messages.system_id,
      options: [
        { text: "Pathfinder", value: 1 },
        { text: "Манчкин", value: 2 },
      ],
    }),
    useInput({ name: "schedule", id: "schedule", label: messages.schedule }),
    useInput({ name: "platform", id: "platform", label: messages.platform }),
    useInput({
      name: "requirements",
      id: "requirements",
      label: messages.requirements,
    }),
    useInput({
      type: "number",
      name: "max_players",
      id: "max_players",
      label: messages.max_players,
    }),
    useInput({
      name: "description",
      id: "description",
      label: messages.description,
    }),

    // FIXME нужно сделать чекбокс/кнопку, по нажатию на которую выпадает дополнительное поле с суммой оплаты.
    // useInput({
    //   type: "checkbox",
    //   name: "isPaid",
    //   id: "isPaid",
    //   label: messages.isPaid,
    //   defaultValue: false
    // }),
    useInput({
      type: "number",
      name: "pricing",
      id: "pricing",
      label: messages.pricing,
    }),
  ];
  // useEffect(() => {dispatch(getAuthorId())}, []);
  useEffect(() => {
    console.log(user);
    if (user.length > 1) {
      setAllowRender(true);
      setUserId(user[0]?.user_id);
    }
  }, [user]);
  useEffect(() => {
    console.log(1);
    console.log(userId);
  }, [userId]);
  const submitForm = (event) => {
    event.preventDefault();
    const request = { master_id: user_info };
    inputs.forEach((el) => {
      let { key, value } = el.getKeyValue();
      // TODO переписать этот костыль
      console.log(el.getValue());
      if (key === "system_id" || key === "isPaid" || key === "max_players") {
        value = Number(value);
      }
      request[key] = value;
    });
    dispatch(createPost(request));
  };

  return (
    <div className={styles["new-post-page"]}>
      {allowRender && <Title as="h2">Новая dпубликация</Title>}
      <form
        className={styles["new-post-page__new-post-form"]}
        onSubmit={submitForm}
      >
        {inputs.map((el) => (
          <Input
            key={el.attrs.id}
            className={styles["new-post-page__new-post-form-input"]}
            id={el.attrs.id}
            name={el.attrs.name}
            type={el.attrs.type}
            value={el.attrs.value}
            handleChange={el.handleChange}
            label={el.attrs.label}
            options={el.attrs.options}
          />
        ))}
        {user_info ? (
          <Button
            className={styles["new-post-page__new-post-form-submit-button"]}
            type="submit"
          >
            Опубликовать
          </Button>
        ) : (
          <h2>Пожалуйста подождите, ваши данные загружаются</h2>
        )}
      </form>
    </div>
  );
};
