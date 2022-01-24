import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { CLEAR_SESSION, CLEAR_USER } from "../../redux/types";

export const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch({type:CLEAR_SESSION})
    dispatch({type:CLEAR_USER})

    let response = await fetch("http://localhost:5000/auth/logout");
    if (response.status === 200) {
      navigate("/");
    }
  };

  return (
    <div>
      <h3>Logout</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
