export const ShowProfileDescription = ({ data, isOwner }) => {
  return (
    <ul>
      <li>
        <span>Ник:</span>
        {data.name}
      </li>
      {data.isFilled ? (
        <>
          <li>
            <span>Возраст:</span>
            {data.age}
          </li>
          <li>
            <span> Пол:</span>
            {data.gender}
          </li>
          <li>
            <span>Опыт:</span>
            {data.experience}
          </li>
          <li>
            <span>Часовой пояс:</span>
            {data.timezone}
          </li>
          <li>
            <span>Предпочитаемый график:</span>
            {data.prefered_schedule}
          </li>
          <li>
            <span>О себе:</span> {data.textarea}
          </li>{" "}
        </>
      ) : (
        <>
          <h2>
            {isOwner
              ? `Пожалуйста, заполните профиль, чтобы пользоваться функционалом сайта.`
              : `Пользователь ещё не заполнил свой профиль.`}
          </h2>
        </>
      )}
    </ul>
  );
};
