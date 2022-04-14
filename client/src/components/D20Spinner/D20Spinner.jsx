import React from "react";
import { useNavigate } from "react-router";
import D20 from "./d20.png";
import styles from "./D20spinner.module.css";

export const D20Spinner = ({ big, redirect }) => {
  const navigate = useNavigate();
  const handleClik = () => {
    if (redirect) {
      navigate("/");
    }
  };
  return (
    <div onClick={handleClik} className={styles["dice-container"]}>
      {redirect && <h2>Если загрузка идёт слишком долго, нажмите сюда. </h2>}
      <img
        src={D20}
        alt={D20}
        className={big ? styles["d20-big"] : styles.d20}
      />
    </div>
  );
};
