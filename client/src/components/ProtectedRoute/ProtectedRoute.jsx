import useAuth from "../../customHooks/authHook";
import { Outlet } from "react-router";
import { MainPage } from "../../pages/MainPage/MainPage";

export const ProtectedRoutes = ({ session }) => {
  const isLoggedIn = useAuth(session);
  return isLoggedIn ? <Outlet /> : <MainPage spinner />;
};
