import style from './chat.module.css'
let oleg ={uri: 'https://sozh.info/wp-content/uploads/2019/09/Oleg-Mongol.jpg'}
// import oleg from 'https://sozh.info/wp-content/uploads/2019/09/Oleg-Mongol.jpg'

export const Chat = () => {
  return (
<div className={style.chat}>
<div className={style.container}>
  <img src={oleg.uri} alt="Avatar" />
  <p>Hello. How are you today?</p>
  <span className={style['time-right']}>11:00</span>
</div>

<div className={`${style.container} ${style.darker}`}>
  <img src={oleg.uri}alt="Avatar" className={style.right} />
  <p>Hey! I'm fine. Thanks for asking!</p>
  <span className={style['time-left']}>11:01</span>
</div>

<div className={style.container}>
  <img src={oleg.uri} alt="Avatar" />
  <p>Sweet! So, what do you wanna do today?</p>
  <span className={style['time-right']}>11:02</span>
</div>

<div className={`${style.container} ${style.darker}`}>
  <img src={oleg.uri}alt="Avatar" className={style.right} />
  <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
  <span className={style['time-left']}>11:05</span>
</div>
<div className={style.container}>
  <img src={oleg.uri} alt="Avatar" />
  <p>Hello. How are you today?</p>
  <span className={style['time-right']}>11:00</span>
</div>

<div className={`${style.container} ${style.darker}`}>
  <img src={oleg.uri}alt="Avatar" className={style.right} />
  <p>Hey! I'm fine. Thanks for asking!</p>
  <span className={style['time-left']}>11:01</span>
</div>

<div className={style.container}>
  <img src={oleg.uri} alt="Avatar" />
  <p>Sweet! So, what do you wanna do today?</p>
  <span className={style['time-right']}>11:02</span>
</div>

<div className={`${style.container} ${style.darker}`}>
  <img src={oleg.uri}alt="Avatar" className={style.right} />
  <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
  <span className={style['time-left']}>11:05</span>
</div>

</div>
)};
