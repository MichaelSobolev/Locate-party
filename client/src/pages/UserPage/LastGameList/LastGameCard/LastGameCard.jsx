import { Title } from '../../../../components/Title/Title';

import styles from './styles.module.css';

export const LastGameCard = ({ date, gameName, gameImage }) => (
  <div className={styles['last-game-card']}>
    <img className={styles['last-game-card__image']} src={gameImage} alt={gameName} />
    <time className={styles['last-game-card__date']} datetime={date}>{date}</time>
    <Title className={styles['last-game-card__name']}>{gameName}</Title>
  </div>
);
