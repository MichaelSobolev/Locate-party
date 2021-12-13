import {LastGameCard} from './LastGameCard';

import styles from './styles.module.css';

export const LastGameList = ({lastGamesIds}) => (
    <ul className={styles['last-game-list']}>
        {lastGamesIds.map((lastGameId) => (
            <li key={lastGameId} className={styles['last-game-list__item']}>
                <LastGameCard id={lastGameId} />
            </li>
        ))}
    </ul>
);
