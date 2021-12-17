import { useState } from "react";
import {FcGoogle} from "react-icons/fc"

import styles from "./styles.module.css";

export const Login = () => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div>
      <div>
        <h3>Just Do it</h3>
        <button className={styles.button} onClick={google}>
        <FcGoogle className='icon'/> Login with Google</button>
      </div>





      
    </div>
  );
};
