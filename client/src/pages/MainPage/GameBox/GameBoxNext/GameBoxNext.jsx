import React from "react";
import logo1 from './imgNext/1.jpeg';
import logo2 from './imgNext/1_52550119eea3652550119eea73.jpeg'

import styles from "./styles.module.css";

export const GameBoxNext = () => (
  <div className={styles.nextdiv}>
  <input className={styles.input} type="radio" name="position" checked />
  <input className={styles.input} type="radio" name="position" />
  <input className={styles.input} type="radio" name="position" />
  <input className={styles.input} type="radio" name="position" />
  <input className={styles.input} type="radio" name="position" />
  <section id="carousel">
    <div className={styles.item}><img src={logo1}/></div>
    <div className={styles.item}><img src={logo2} /></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
    <div className={styles.item}></div>
  </section>
</div>
) 






