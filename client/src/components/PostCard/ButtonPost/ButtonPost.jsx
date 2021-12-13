import React from "react";
import { useNavigate } from "react-router";

import styles from "./styles.module.css";

export const ButtonPost = ({ id }) => {
  const navigate = useNavigate();

  return (
    <button
      className={styles.button}
      onClick={() => navigate(`/announcements/${id}`)}
    >
      Отправить
    </button>
  );
};
