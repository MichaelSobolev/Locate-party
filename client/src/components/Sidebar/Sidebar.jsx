import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { Avatar } from "../Avatar/Avatar";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar__wrapper"]}>
        <div className={styles["sidebar__item"]}>
        </div>
      </div>
    </div>
  );
};
