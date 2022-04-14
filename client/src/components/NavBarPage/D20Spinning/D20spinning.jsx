import React from "react";
import D20 from "./d20.png";
import styles from "./D20spinning.module.css";

export const D20Spinning = (props) => {
  return (
    <button
      onClick={() => props.setTheme((prev) => !prev)}
      className={styles.button}
    >
      <img src={D20} alt={D20} className={styles["App-logo"]} />
    </button>
  );
};
