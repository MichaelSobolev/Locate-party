import React from "react";
import { useNavigate } from "react-router";

import styles from "./styles.module.css";

export const ButtonPost = ({
  id = 1,
  path = "/announcements/",
  children,
  isNavigation = true,
  action,
}) => {
  const callback = () => navigate(`${path}${id}`);
  const navigate = useNavigate();
  return (
    <button
      className={styles.button}
      onClick={isNavigation ? callback : action}
    >
      {children ? children : "Принять"}
    </button>
  );
};
