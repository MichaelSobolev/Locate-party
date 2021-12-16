import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Title } from "../../components/Title/Title";
import useInput from "../../customHooks/inputHook";
import { createPost, updatePost } from "../../redux/actions/posts.actions";
import styles from "../newPostPage/styles.module.css";

export const PostEditPage = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const dispatch = useDispatch();
  const fields = {
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
    useInput({ name: "title", id: "title", label: fields.title }),
    useInput({
      type: "number",
      name: "system_id",
      id: "system_id",
      label: fields.system_id,
    }),
    useInput({ name: "schedule", id: "schedule", label: fields.schedule }),
    useInput({ name: "platform", id: "platform", label: fields.platform }),
    useInput({
      name: "requirements",
      id: "requirements",
      label: fields.requirements,
    }),
    useInput({
      type: "number",
      name: "max_players",
      id: "max_players",
      label: fields.max_players,
    }),
    useInput({
      name: "description",
      id: "description",
      label: fields.description,
    }),
    useInput({
      type: "number",
      name: "pricing",
      id: "pricing",
      label: fields.pricing,
    }),
  ];
  const submitForm = (event) => {
    event.preventDefault();
    const request = {};
    inputs.forEach((el) => {
      let { key, value } = el.getKeyValue();
      if (value !== "") {
        if (key === "system_id" || key === "isPaid" || key === "max_players") {
          // TODO переписать этот костыль
          value = Number(value);
        }
        request[key] = value;
      }
    });
    console.log(id, request);
    dispatch(updatePost(id, request));
    navigate(`/announcements/${id}`)
  };

  return (
    <>
      <div className={styles["new-post-page"]}>
        <Title as="h2">Новая публикация</Title>
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
            />
          ))}
          <Button
            className={styles["new-post-page__new-post-form-submit-button"]}
            type="submit"
            clickFunction={submitForm}
          >
            Принять
          </Button>
        </form>
      </div>
    </>
  );
};
