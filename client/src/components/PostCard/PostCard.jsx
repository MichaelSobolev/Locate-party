import React from "react";
import { ButtonPost } from "./ButtonPost/ButtonPost";

import styles from "./styles.module.css"

export const PostCard = () => (
  <div className={styles['post-card-size']}>
  <div className={styles['wrapper']} id="app">
  <div className={styles['card-form']}>
    <div className={styles['card-list']}>
      <div className={`${styles['card-item']} -front`}>
        <div className={styles['card-item__side']}>
          <div className={styles['card-item__cover']}>
            <img src="https://images.pexels.com/photos/6541817/pexels-photo-6541817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className={styles['card-item__bg']} />
          </div>
        </div>
      </div>
    </div>
    <div className={styles['card-form__inner']}>
      <p className={styles['p-color']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ButtonPost />
    </div>
  </div>
</div>
</div>
)
