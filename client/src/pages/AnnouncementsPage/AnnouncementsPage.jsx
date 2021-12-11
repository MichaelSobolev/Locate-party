import React from 'react'
import styles from './AnnouncementsPage.module.css'

export const AnnouncementsPage = () => {
  const userName = null
  return (
   <div className={styles.TemporaryMargin}>
    <h2> AnnouncementsPage</h2>
    <div className={styles.PseudoHeader}>
      <p>Hello {userName ? userName : "UserName"}</p>
      <input type="text" id="search" placeholder="Search..."/>
      <button>Add new post</button>
    </div>
    <section className={styles.PostsBody}>
      <div  className={styles.Card}>
        <h2>Заголовок</h2>
        <div> <img src="/" alt="Иконка создателя"/> <p>Имя создателя</p></div>
        <div>
        <ul className={styles.Tags}><li className={styles.Tag}>D&D5e</li></ul>
        </div>
        <div><strong>Платформа:</strong><p>Discord + OwlbearRodeo</p></div>
        <div><strong>Описание:</strong><p>....</p></div>
        <button>Кнопка на страницу с описанием </button>
      </div>
    </section>
    <section className={styles.PostsBody}>
      <div  className={styles.Card}>
        <h2>Заголовок</h2>
        <div> <img src="/" alt="Иконка создателя"/> <p>Имя создателя</p></div>
        <div>
        <ul className={styles.Tags}><li className={styles.Tag}>D&D5e</li></ul>
        </div>
        <div><strong>Платформа:</strong><p>Discord + OwlbearRodeo</p></div>
        <div><strong>Описание:</strong><p>....</p></div>
        <button>Кнопка на страницу с описанием </button>
      </div>
    </section>
    <section className={styles.PostsBody}>
      <div  className={styles.Card}>
        <h2>Заголовок</h2>
        <div> <img src="/" alt="Иконка создателя"/> <p>Имя создателя</p></div>
        <div>
        <ul className={styles.Tags}><li className={styles.Tag}>D&D5e</li></ul>
        </div>
        <div><strong>Платформа:</strong><p>Discord + OwlbearRodeo</p></div>
        <div><strong>Описание:</strong><p>....</p></div>
        <button>Кнопка на страницу с описанием </button>
      </div>
    </section>
    </div>
  )
}

