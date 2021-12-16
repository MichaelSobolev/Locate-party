import { useState } from "react";

export const ChatTest = () => {
  const [messages, setMessages] = useState([]);
  const [messageTextField, setMessageTextField] = useState("");

  const socket = new WebSocket(`ws://localhost:${5000}`); // FIXME: сделать через window.location чтобы адрес был динамическим
  socket.onopen = function () {
    // обработчик срабатывает при установке соединения
    console.log("Соединение установлено.");
  };

  socket.onmessage = function (event) {
    // обработчик события "пришло сообщение от сервера"
    const message = JSON.parse(event.data); // достаем текст сообщения из ответа от сервера // TODO: доставать еще и имя
    setMessages([...messages, <div>{message.text}</div>]);
  };

  socket.onerror = function (error) {
    alert(`Ошибка ${error.message}`);
  };

  // отправка сообщения
  const sendMesageHandler = () => {
    socket.send(JSON.stringify({ text: messageTextField })).then(() => {
      setMessageTextField("");
    });
  };

  return (
    <div>
      <form onSubmit={sendMesageHandler}></form>
      <input
        type="text"
        onChange={(e) => setMessageTextField(e.target.value)}
        name={messageTextField}
        placeholder="message"
      ></input>
      <button onClick={sendMesageHandler}>send</button>
      <div>
        <ul>
          {messages.map((el) => {
            return <li>{el}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
