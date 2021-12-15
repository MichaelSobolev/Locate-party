import { useNavigate } from "react-router";

export const Logout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    //window.open("http://localhost:5000/auth/logout", "_self");
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
