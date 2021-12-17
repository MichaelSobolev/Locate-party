import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ButtonPost } from "../../../components/PostCard/ButtonPost/ButtonPost";
import { acceptPlayer } from "../../../redux/actions/players.actions";
import style from "./chat.module.css";
let oleg = {
  uri: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
};
// import oleg from 'https://sozh.info/wp-content/uploads/2019/09/Oleg-Mongol.jpg'
const socket = new WebSocket("ws://localhost:3090");

const AddUser = (event) => {
  if (event.key === "Enter") {
  }
};

export const Chat = ({
  isAuthor = false,
  dispatchPayload = { user_id: 1, post_id: 1 },
  user_name = "Олег",
  uri
}) => {
  console.log("CHat");
  console.log('uri',uri);
  const [input, setInput] = useState("");
  const [arrMessages, setArrMessages] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    socket.onopen = function () {
      console.log("Соединение установлено.");
    };
    socket.onmessage = function (event) {
      const message = JSON.parse(event.data); // достаем текст сообщения из ответа от сервера // TODO: доставать еще и имя
      console.log("message", message);
      if (message.text !== "") {
        setArrMessages((prev) => [...prev, message]);
      }
      if (message?.redirect) {
        console.log("succes!");
        navigate(`/gameroom/${dispatchPayload.post_id}`);
      }
      console.log(arrMessages);
    };
  }, []);

  const redirect = (e) => {
    e.preventDefault();
    dispatch(acceptPlayer(dispatchPayload));
    socket.send(JSON.stringify({ redirect: true, text: "" }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(socketReferens())
    const today = new Date();

    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    socket.send(
      JSON.stringify({
        redirect: false,
        text: e.target.message.value,
        user_name,
        time,
        uri
      })
    ); // отправляем сообщение на сервер через вебсокет
    setInput("");
  };

  return (
    <>
      <div className={style["chat-input"]}>
        <div className={style.chat}>
          {arrMessages.map((el, i) => (
            <>
              <div className={style.container}>
                <img src={el.uri} alt="Avatar" />
                <figcaption>{user_name}</figcaption>
                <p key={i}>{el.text}</p>
                <span className={style["time-right"]}>{el.time}</span>
              </div>
            </>
          ))}
        </div>
        <div className={style.input}>
          <form onSubmit={handleSubmit}>
            <input
              className={style["input-form"]}
              type="text"
              name="message"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter"
              value={input}
            ></input>
          </form>
        </div>
      </div>
      {isAuthor && (
        <ButtonPost action={redirect} isNavigation={false} path="">
          Принять юзера
        </ButtonPost>
      )}
    </>
  );
};
