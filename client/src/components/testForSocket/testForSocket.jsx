import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
const socket = new WebSocket("ws://localhost:3090");

export const TestForSocket = () => {
  const [input, setInput] = useState("");
  const [arrMessages, setArrMessages] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    socket.onopen = function () {
      // обработчик срабатывает при установке соединения
      console.log("Соединение установлено.");
    };
    socket.onmessage = function (event) {
      // обработчик события "пришло сообщение от сервера
      const message = JSON.parse(event.data); // достаем текст сообщения из ответа от сервера // TODO: доставать еще и имя
      console.log("message", message);
      if (message.text !== ""){
        setArrMessages((prev) => [...prev, message]);
      }
      if (message?.redirect) {
        console.log("succes!")
        navigate("/admin");
      }
      console.log(arrMessages);
    };
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(socketReferens())
    socket.send(JSON.stringify({ redirect:false,text: e.target.message.value })); // отправляем сообщение на сервер через вебсокет
    setInput("");
  };

  const redirect = (e) => {
    e.preventDefault();

    socket.send(JSON.stringify({ redirect: true, text:""}));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit">submit</button>
      </form>
      <button onClick={redirect}>Redirect</button>
      <ul>
        {arrMessages.map((el, i) => (
          <li key={i}>{el.text}</li>
        ))}
      </ul>
    </>
  );
};
