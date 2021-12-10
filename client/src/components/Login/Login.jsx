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
        <h3>Register</h3>
        <input
          onChange={(e) => setRegisterUsername(e.target.value)}
          value={registerUsername}
          placeholder="username"
        />
        <input
          onChange={(e) => setRegisterPassword(e.target.value)}
          value={registerPassword}
          placeholder="password"
        />
      </div>

      <div>
        <h3>use Google to login</h3>
        <button onClick={google}>Login</button>
      </div>
    </div>
  );
};
