import { Navigate } from "react-router";

export const PostCard = ({
  id, // id поста в дб!
  key,
  isPaid, // ? (background-color: red) : b(background-color: normal)
  name, // имя создателя
  title, //  Заголовок карточки
  image, // Ссылка на картинку из профиля пользователя
  tags, // Тэги, пока предусмотрен один, но к релизу ситуация может измениться
  platform, // Необходимый для игры софт
  schedule, // параграф о графике ведущего
  reuquirements, // Требования ведущего к игрокам
  max_players,
  data, // Дата создания
  description, // Описание поста
}) => {
  return (
    <div className={"card"} key={key}>
      <h2>{title}</h2>
      {/* Блок о ведущем */}
      <div>
        <img src={image} alt="Иконка создателя" />
        <p>{name}</p>
      </div>
      {/* О игре:*/}
      {/* Тэги для фильтра */}
      {tags.map((tag) => {
        return (
          <div key={tag.id}>
            <ul className={"styles.Tags"}>
              <li className={"styles.Tag"}> {tag.name} </li>
            </ul>
          </div>
        );
      })}
      {/* Необходимые программы для игры: */}
      <span>
        <strong>Платформа:</strong>
        <p>{platform}</p>
      </span>
      {/* Блок описания */}
      <div>
        <strong>Описание:</strong>
      </div>
      <p>{description}</p>
      <button onClick={Navigate(`/announcements/${id}`)}>
        Кнопка на страницу с описанием{" "}
      </button>
    </div>
  );
};
