import React from 'react';

import { Avatar } from '../../../components/Avatar/Avatar';
import { Title } from '../../../components/Title/Title';


import styles from './styles.module.css';

export const UserInfo = ({ name, image, email, className = '' }) => (

  <section className={`${styles['user-info']} ${className}`}>
    <h2 className="visually-hidden">Информация о пользователе {name}</h2>
    <Avatar className={styles['user-info__avatar']} src={image} alt={`Фотография пользователя ${name}`} size="xl" />
    <div className={styles['user-info__name-email-wrapper']}>
        <Title className={styles['user-info__name']}>{name}</Title>
        <span className={styles['user-info__email']}>{email}</span>
    </div>
  </section>
);




// - age Возраст (integer)
// - gender Пол
// - experience Опыт
// - timezone Часовой пояс
// - prefered_schedule Предпочитаемый график
// - Как предпочитаете играть:
// Чекбоксы: голосом, текстом, с камерой или без, ролл20, Foundry, TTS или другое?
// - system Предпочитаемая игровая система (селектор с вариантами из Systems.title)
// - messenger Ссылка на discord/другой мессенджер
// - alignment Мировоззрение ( селектор со строками: ЗД, НД, ХД, ЗН, ИН, ХН, ЗЗ, НЗ, ХЗ)
// - BIO  о себе 
