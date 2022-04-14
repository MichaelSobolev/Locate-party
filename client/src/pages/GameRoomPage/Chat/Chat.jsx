import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ButtonPost } from "../../../components/PostCard/ButtonPost/ButtonPost";
import { acceptPlayer } from "../../../redux/actions/players.actions";
import style from "./chat.module.css";

// const socket = new WebSocket("ws://localhost:3090");
const socket = new WebSocket(`ws://localhost:3090`);
socket.onopen = function () {
  console.log("Соединение установлено.");
};

export const Chat = ({
  isAuthor = false,
  user_id = 1,
  post_id = 1,
  user_name = "Олег",
  uri,
}) => {
  const [input, setInput] = useState("");
  const [arrMessages, setArrMessages] = useState([]);
  const [wssId, setWssId] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    socket.send(
      JSON.stringify({
        redirect: false,
        text: `${user_name} Подключился`,
        user_name: "",
        time: "",
        uri,
        connection: true,
        post_id,
        user_id,
      })
    );
  }, []);
  useEffect(() => {
    socket.onmessage = function (event) {
      const message = JSON.parse(event.data); // достаем текст сообщения из ответа от сервера
      if (message.wssUserid && wssId) {
        setWssId(message.wssUserid);
      }

      if (message.text !== "" && !message.connection) {
        setArrMessages((prev) => [...prev, message]);
      }
      if (message?.redirect) {
        navigate(`/gameroom/${post_id}`);
      }
    };
  }, []);



  const redirect = (e) => {
    e.preventDefault();
    dispatch(acceptPlayer({ user_id, post_id }));
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
        uri,
        post_id,
        user_id,
        wssUserId: wssId,
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
                {el.uri && <img src={el.uri} alt="Avatar" />}
                <figcaption>{el.user_name}</figcaption>
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
