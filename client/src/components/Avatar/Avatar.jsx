import React from 'react';

import styles from './styles.module.css';

export const Avatar = ({src, alt, size = 'xs', className = ''}) => (
    <span className={`${styles.avatar} ${styles[`avatar_size_${size}`]} ${className}`}>
        <img className={styles['avatar__image']} src={src} alt={alt} width="100%" height="auto" />
    </span>
);
