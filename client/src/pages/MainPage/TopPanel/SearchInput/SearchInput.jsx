import styles from './styles.module.css';

export const SearchInput = ({className, value, results = [], onChange}) => {
    const handleControlChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <div className={`${styles['search-input']} ${className}`}>
            <input
                onChange={handleControlChange}
                className={
                    `${styles['search-input__control']} ${results.length > 0 ? styles['search-input__control_visible-results'] : ''}`
                }
                type="search"
                value={value}
                placeholder="Найти..."
            />
            {results.length > 0 && (
                <ul className={styles['search-input__result-list']}>
                    {results.map((result) => (
                        <li key={result.id} className={styles['search-input__result-list-item']}>
                            <a className={styles['search-input__result-list-item-link']} href={result.href}>{result.name}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};
