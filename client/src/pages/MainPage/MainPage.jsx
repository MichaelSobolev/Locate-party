import React from 'react';

import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';

import styles from './styles.module.css';
import { Video } from './Video/Video';
import { TopPanel } from './TopPanel';

export const MainPage = () => (
  <div>
    <TopPanel className={styles['main-page__top-panel']} />
    <Video source="https://static.videezy.com/system/resources/previews/000/047/760/original/000A3301-2.mp4" />
    <Title as="h2">О нас: Сайт для любителей настольных игр и все что с этим  связанно.</Title>
    <Text>Здесь ты сможешь найти людей, котрые любят настольные игры, так же как и ты!<br />
      У нас самое больше комьюнити</Text>
  </div>
);
