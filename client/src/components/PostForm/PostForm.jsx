import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useInput from "../../customHooks/inputHook";
import {
  createPost,
  updatePost,
  getSystemsForSelector,
} from "../../redux/actions/posts.actions";
import { Button } from "../Button/Button";
import { D20Spinner } from "../D20Spinner/D20Spinner";
import { Input } from "../Input/Input";
import { Title } from "../Title/Title";
import styles from "./styles.module.css";

export const PostForm = ({
  editPost,
  postId,
  postData = {
    image: "",
    title: "",
    systems: "",
    schedule: "",
    platform: "",
    location: "",
    requirements: "",
    max_players: "",
    description: "",
  },
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.session);
  const userDatabseId = useSelector((state) => state.userData.id);
  const systemSelectorOptions = useSelector(
    (state) => state.systemSelectorData
  );

  const [allowSendData, setAllowSendDate] = useState(false);
  function submitForm(e) {
    e.preventDefault();

    const request = { master_id: editPost ? userDatabseId : userData.googleId };

    inputs.forEach((el) => {
      let { key, value } = el.getKeyValue();
      if (key === "max_players") {
        value = Number(value);
      }
      request[key] = value;
    });
    if (editPost) {
      dispatch(updatePost(postId, request));
      navigate(`/announcements/${postId}`);
    } else {
      dispatch(createPost(request));
      navigate("/announcements");
    }
  }
  useEffect(() => {
    if (userData) {
      setAllowSendDate(true);
      dispatch(getSystemsForSelector(userData.googleID));
    }
  }, [dispatch, userData]);

  const messages = {
    image: "URL Картинки",
    title: `Заголовок объявления`,
    systems: `Игровая система`,
    schedule: `Удобное время и дни недели для проведения игр`,
    platform: `Необходимые для игры  программы/приложения`,
    location: `Где будет проходить игра (Если онлайн укажите URL)`,
    requirements: `Требования к игрокам`,
    max_players: `Максимальное количество игроков`,
    description: `Описание:`,
  };

  const inputs = [
    useInput({
      name: "image",
      id: "image",
      label: messages.image,
      defaultValue: postData.image,
    }),
    useInput({
      name: "title",
      id: "title",
      label: messages.title,
      defaultValue: postData.title,
    }),
    useInput({
      name: "system_id",
      id: "system_id",
      label: messages.systems,
      selectorMode: true,
      selectorOptions: systemSelectorOptions,
      defaultValue: postData.system_id,
    }),

    useInput({
      name: "schedule",
      id: "schedule",
      label: messages.schedule,
      defaultValue: postData.schedule,
    }),
    useInput({
      name: "platform",
      id: "platform",
      label: messages.platform,
      defaultValue: postData.platform,
    }),
    useInput({
      name: "location",
      id: "location",
      label: messages.location,
      defaultValue: postData.location,
    }),
    useInput({
      name: "requirements",
      id: "requirements",
      label: messages.requirements,
      defaultValue: postData.requirements,
    }),
    useInput({
      type: "number",
      name: "max_players",
      id: "max_players",
      label: messages.max_players,
      defaultValue: postData.max_players,
    }),
    useInput({
      textAreaMode: true,
      name: "description",
      id: "description",
      label: messages.description,
      defaultValue: postData.description,
    }),
  ];

  return (
    <div className={styles["new-post-page"]}>
      <Title as="h2">Новая Публикация</Title>
      <form
        autoComplete="off"
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
            textAreaMode={el.attrs.textAreaMode}
            selectorMode={el.attrs.selectorMode}
            selectorOptions={el.attrs.selectorOptions}
          />
        ))}
        {allowSendData ? (
          <div className={styles["post-form__button"]}>
            <Button
              className={styles["new-post-page__new-post-form-submit-button"]}
              type="submit"
            >
              Опубликовать
            </Button>
          </div>
        ) : (
          <D20Spinner />
        )}
      </form>
    </div>
  );
};
