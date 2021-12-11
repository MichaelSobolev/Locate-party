import { Text } from '../../../components/Text/Text';

import styles from './styles.module.css';
import { SearchInput } from './SearchInput';

export const TopPanel = ({userName, className}) => (
    <div className={`${styles['top-panel']} ${className}`}>
        <Text>Привет, {userName}!</Text>
        <SearchInput className={`${styles['top-panel__search-input']} ${className}`} />
    </div>
);
