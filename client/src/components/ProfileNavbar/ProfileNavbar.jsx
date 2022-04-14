import styles from "./ProfileNavbar.module.css";

export const ProfileNavbar = (props) => {
  function activeProfilePageHandler(event) {
    props.changeActivePage(Number(event.target.dataset.index));
  }

  return (
    <>
      <div className={styles["navigation"]} onClick={activeProfilePageHandler}>
        <span
          className={props.active === 0 ? styles.active : ""}
          data-index="0"
        >
          Профиль
        </span>
        {props.isOwner && (
          <>
            <span
              className={props.active === 1 ? styles.active : ""}
              data-index="1"
            >
              Ваши Игры
            </span>
            <span
              className={props.active === 2 ? styles.active : ""}
              data-index="2"
            >
              Ваши отклики
            </span>
          </>
        )}
      </div>
    </>
  );
};
