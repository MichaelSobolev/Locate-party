import style from './chat.module.css'
let oleg ={uri: 'https://www.seekpng.com/png/full/356-3562377_personal-user.png'}
// import oleg from 'https://sozh.info/wp-content/uploads/2019/09/Oleg-Mongol.jpg'

const AddUser = event => {
  if (event.key === 'Enter'){
    // setUserVaule ([
    //   ...vaule,
    //   {
    //    id: user.id
    //    title: user.vaule
    //   }
    // ])
  }
}

export const Chat = () => {
  return (
    <div className={style[ 'chat-input']}>
    <div className={style.chat}>
      <div className={style.container}>
        <img src={oleg.uri} alt="Avatar" />
        <figcaption>User_Name</figcaption>
        <p>Hello. How are you today? </p>
        <span className={style[ 'time-right']}>11:00</span>
      </div>  
    </div>
    <div className={style.input}>
      <input className={style[ 'input-form']} type="text" onKeyPress={AddUser} placeholder='Enter'></input>
    </div>
  </div>
)};
