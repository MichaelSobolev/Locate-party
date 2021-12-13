import React from "react";
import { useNavigate } from "react-router";

import styles from "./styles.module.css";

export const ButtonPost = ({ id, path = "/announcements/", children }) => {
  const navigate = useNavigate();
  console.log(path + id);
  return (
    <button className={styles.button} onClick={() => navigate(`${path}${id}`)}>
      {children ? children : "Отправить"}
    </button>
  );
};
