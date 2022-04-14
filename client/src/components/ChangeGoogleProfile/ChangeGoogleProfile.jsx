import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router";
// import { CLEAR_SESSION, CLEAR_USER } from "../../redux/types";
import { D20Spinner } from "../D20Spinner/D20Spinner";

export const ChangeGoogleProfile = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const logout = async () => {};

  useEffect(() => {
    window.open("http://localhost:5000/auth/google", "_self");
  }, []);

  return (
    <div>
      <D20Spinner />
    </div>
  );
};
