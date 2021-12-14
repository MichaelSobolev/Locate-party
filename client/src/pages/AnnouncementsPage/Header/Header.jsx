import {Button} from '../../../components/Button/Button';
import {Input} from '../../../components/Input/Input';

import styles from './styles.module.css'

export const Header = ({userName}) => (
    <div className={styles.header}>
        <p>{userName ? `Привет, ${userName}` : 'Привет'}</p>
        <form className={styles['header__search-form']}>
            <Input className={styles['header__search-form-input']} type="search" id="search" placeholder="Найти..." />
            <Button className={styles['header__search-form-submit-button']}>Найти</Button>
        </form>
    </div>
);
