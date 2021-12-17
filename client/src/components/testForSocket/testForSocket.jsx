import { useState, useEffect } from "react";
const socket = new WebSocket("ws://localhost:3090");


export const TestForSocket = () => {
  const [input, setInput] = useState("");
  const [arrMessages, setArrMessages] = useState([]);
  useEffect(()=> {
    socket.onopen = function () {
      // обработчик срабатывает при установке соединения
      console.log("Соединение установлено.");
    };
    socket.onmessage = function (event) {
      // обработчик события "пришло сообщение от сервера
      const message = JSON.parse(event.data); // достаем текст сообщения из ответа от сервера // TODO: доставать еще и имя
         console.log(message)
      setArrMessages(prev => [...prev, message]);
      console.log(arrMessages);
      // console.log(`Получены данные ${event.data}`);
    };
  }, [])
  const handleSubmit = (e  ) => {
    e.preventDefault();
    // dispatch(socketReferens())
    socket.send(JSON.stringify({ text: e.target.message.value })); // отправляем сообщение на сервер через вебсокет
    setInput("");
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
      <ul>
        {arrMessages.map((el, i) => (
          <li key={i}>{el.text}</li>
        ))}
      </ul>
    </>
  );
};
