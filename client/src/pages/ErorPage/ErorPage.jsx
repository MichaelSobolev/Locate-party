import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

export const ErorPage = () => {

  return (
    <>
      <div className="[countainer-error-page]">
        <figure className={styles['figure-eror']}>
          {/* {styles['last-game-card__image']} */}
          <div className={styles['sad-mac']}></div>
          <figcaption className={styles['figcaption']}>
            <span className={styles['sr-text']}>Error 404: Not Found</span>
            <span className={styles['e']}></span>
            <span className={styles['r']}></span>
            <span className={styles['r']}></span>
            <span className={styles['o']}></span>
            <span className={styles['r']}></span>
            <span className={styles['_4']}></span>
            <span className={styles['_0']}></span>
            <span className={styles['_4']}></span>
            <span className={styles['n']}></span>
            <span className={styles['o']}></span>
            <span className={styles['t']}></span>
            <span className={styles['f']}></span>
            <span className={styles['o']}></span>
            <span className={styles['u']}></span>
            <span className={styles['n']}></span>
            <span className={styles['d']}></span>
          </figcaption>
        </figure>
        <div className={styles.eror}><Link to="/">Главная страница</Link></div>
      </div>

    </>
  )
}
