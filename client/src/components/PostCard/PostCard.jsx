import React from "react";
import { useNavigate } from "react-router";
import { ButtonPost } from "./ButtonPost/ButtonPost";

import styles from "./styles.module.css";
export const PostCard = ({ props }) => (
  <div className={styles["post-card-size"]}>
    <div className={styles["wrapper"]} id="app">
      <div className={styles["card-form"]}>
        <div className={styles["card-list"]}>
          <div className={`${styles["card-item"]} -front`}>
            
            <div className={styles["card-item__side"]}>
              <div
                className={styles["card-item__cover"]}
              >
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
            <div>
              <h2>{props.title}</h2>
            </div>
            <img src={props.image} />
            <div>
              <strong>Тэги:</strong>
              <p> {props.tags}</p>
            </div>
            <div>
              <strong>Платформа:</strong>
              <p>{props.platform}</p>
            </div>

            <strong>Ведущий</strong>
            <p>{props.name}</p>
            <image src={props.icon} />
            <div>
              <strong>Расписание:</strong>
              <p>{props.schedule}</p>
            </div>
            <div>
              <strong>Требования к игрокам:</strong>
              <p>{props.reuquirements}</p>
            </div>
            <div>
              <strong>Игроков</strong>
              <p>0/{props.max_players}</p>
            </div>
            <div>
              <strong>Описание игры:</strong>
              <p>{props.description}</p>
            </div>
            <div>
              <p className={styles["p-color"]}></p>
              {props.button ? <ButtonPost id={props.id} /> : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
