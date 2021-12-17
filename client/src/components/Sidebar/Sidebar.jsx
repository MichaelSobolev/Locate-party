import React, {useState}  from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import {Avatar} from '../Avatar/Avatar'


export const Sidebar = () => {
  const UserItemsBar = useSelector((state) =>
    state.session[0] 
  )
  const [name, setName] = useState(UserItemsBar?._json?.name);
  const [image, setImage] = useState(UserItemsBar?._json?.picture);

  return (
  <div className={styles.sidebar}>
    <div className={styles['sidebar__wrapper']}>
      <div className={styles["sidebar__item"]}>
        <Avatar 
         className={styles["user-info__avatar"]}
         src={image}
         size='xl'
         />
        <h2 >{name}</h2>
      </div>
    </div>
  </div >
)}
