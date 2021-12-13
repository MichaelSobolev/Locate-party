import { ButtonPost } from "../PostCard/ButtonPost/ButtonPost";

export const CardContents = ({ props }) => {
  return (
    <>
      <div>
        <h2>{props.title}</h2>
      </div>
      <img src={props.image} />
      <div>
        <strong>Тэги:</strong>
        <p> {props.tags}</p>
      </div>
      <div>
        <strong>Платформа:</strong>
        <p>{props.platform}</p>
      </div>

      <strong>Ведущий</strong>
      <p>{props.name}</p>
      <image src={props.icon} />
      <div>
        <strong>Расписание:</strong>
        <p>{props.schedule}</p>
      </div>
      <div>
        <strong>Требования к игрокам:</strong>
        <p>{props.reuquirements}</p>
      </div>
      <div>
        <strong>Игроков</strong>
        <p>0/{props.max_players}</p>
      </div>
      <div>
        <strong>Описание игры:</strong>
        <p>{props.description}</p>
      </div>
      <div>{props.button ? <ButtonPost id={props.id} /> : ""}</div>
    </>
  );
};
