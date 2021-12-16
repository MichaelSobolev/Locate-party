import React from "react";
import logo1 from "./imgMainPage/9250c94cf10d8178e0d6aa36fc9ee399.jpeg";
import logo2 from "./imgMainPage/Beaver-Games-bew-logo.png";

import styles from './styles.module.css';

export const GameBox = () => (
  <div className={styles.gamebox}>
    <div className={styles.boxtext}>
      <img src={logo1} width="250" height="250" />
      <figcaption>САРИГРА</figcaption>
    </div>

    <div className={styles.boxtext} >
      <img src={logo2} width="250" height="250" />
      <figcaption>BEAVER GAMES</figcaption>
    </div>
  </div >
)


