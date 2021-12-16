import React from 'react';

import {Title} from '../../components/Title/Title';

import styles from './styles.module.css';
import { UserInfo } from './UserInfo';
import {LastGameList} from './LastGameList';


export const UserPage = ({userName, userImage, userEmail}) => (
  <div className={styles['user-page']}>
    <section className={styles['user-page__last-games']}>
      <Title className={styles['user-page__last-games-title']} as="h2">Последние игры</Title>
      <LastGameList />
    <UserInfo className={styles['user-page__user-info']} />
    </section>
  </div>
);
