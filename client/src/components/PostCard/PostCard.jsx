import React from "react";
import { CardContents } from "../CardContents/CardContents";

import styles from "./styles.module.css";
export const PostCard = ({ props }) => (
  <div className={styles["post-card-size"]}>
    <div className={styles["wrapper"]} id="app">
      <div className={styles["card-form"]}>
        <div className={styles["card-list"]}>
          <div className={`${styles["card-item"]} -front`}>
            <div className={styles["card-item__side"]}>
              <div className={styles["card-item__cover"]}>
                <img
                  src="https://images.pexels.com/photos/6541817/pexels-photo-6541817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className={styles["card-item__bg"]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["normalize-color"]}></div>
        <div className={styles["card-form__inner"]}>
          <div className={styles["card-form__inner"]}>
            <CardContents props={props} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

//src="https://images.pexels.com/photos/6541817/pexels-photo-6541817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
