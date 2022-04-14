import { ButtonPost } from "../PostCard/ButtonPost/ButtonPost";
import style from "./CardContents.module.css";
export const CardContents = ({ props, short }) => {
  const shortenText = (text, maxLength) => {
    if (short && text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };
  const shortDescription = shortenText(props.description, 150);
  return (
    <>
      <div>
        <h2>{props.title}</h2>
      </div>
      <strong>Ведущий</strong>
      <div>
        <img
          className={style["card__profile-picture"]}
          src={props.icon}
          alt={`https://lowcars.net/wp-content/uploads/2017/02/userpic.png`}
        />
        <p>{props.name}</p>
      </div>
      <div>
        <strong>Игровая система:</strong>
        <p> {props.gameSystem}</p>
      </div>
      <div>
        <strong>Платформа:</strong>
        <p>{props.platform}</p>
      </div>
      <div>
        <strong>Игроков</strong>
        <p>0/{props.max_players}</p>
      </div>
      {short && (
        <div>
          <strong>Краткое описание игры:</strong>
          <p>{shortDescription}</p>
        </div>
      )}
      {!short && (
        <>
          <div>
            <strong>Расписание:</strong>
            <p>{props.schedule}</p>
          </div>
          <div>
            <strong>Требования к игрокам:</strong>
            <p>{props.requirements}</p>
          </div>
          <div>
            <strong>Описание игры:</strong>
            <p>{props.description}</p>
          </div>
        </>
      )}

      <div>
        {props.button ? <ButtonPost id={props.id}>Подробнее </ButtonPost> : ""}
      </div>
    </>
  );
};
