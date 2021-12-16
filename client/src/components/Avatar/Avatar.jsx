import React from 'react';

import styles from './styles.module.css';

export const Avatar = ({src , alt, size = 'xs', className = ''}) => (
    <span className={`${styles.avatar} ${styles[`avatar_size_${size}`]} ${className}`}>
        {src === '' ?   <img className={styles['avatar__image']} src={'https://cdni.rt.com/russian/images/2019.11/article/5dc1288902e8bd657e2f3d9c.jpg'} alt={alt} width="100%" height="auto" /> : 
        <img className={styles['avatar__image']} src={src} alt={alt} width="100%" height="auto" />
      }
    </span>
);
