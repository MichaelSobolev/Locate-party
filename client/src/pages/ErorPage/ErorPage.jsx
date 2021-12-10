import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

export const ErorPage = () => {

  return (
    <>
      <div className={styles.eror}> 404 not found</div>
      <div className={styles.eror}><Link to="/">Главная страница</Link></div>
    </>
  )
}
