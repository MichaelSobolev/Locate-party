import React from "react";
import { useNavigate } from "react-router";

import styles from "./styles.module.css";

export const ButtonPost = ({ id, content = "Отправить" }) => {
  const navigate = useNavigate();

  return (
    <button
      className={styles.button}
      onClick={() => navigate(`/announcements/${id}`)}
    >
      {content}
    </button>
  );
};
