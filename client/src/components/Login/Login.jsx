import { useState } from "react";

export const Login = () => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div>
      <div>
        <h3>используйте аккаунт Google для входа</h3>
        <button onClick={google}>Войти</button>
      </div>
    </div>
  );
};
