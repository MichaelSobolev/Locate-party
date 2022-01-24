import React from "react";
import { NavLink } from "react-router-dom";
import {
  BsFillPersonLinesFill,
  BsGrid1X2Fill,
  BsHurricane,
} from "react-icons/bs";
import { D20Spinning } from "./D20Spinning/D20spinning";
import { IoLogOut } from "react-icons/io5";
import { FaDiceD20 } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GiSpikedDragonHead } from "react-icons/gi";

import "./index.css";
import { useSelector } from "react-redux";

export const NavBarPage = (props) => {
  const data = useSelector((state) => state.session);

  console.log("SESSION DATA", data[0]?.id);

  console.log(props);
  return (
    <header className="header">
      <div className="sidenav">
        {data[0]?.id ? (
          <>
            <D20Spinning setTheme={props.setTheme} />
            <NavLink
              className="header__link"
              activeClassName="header__link_active"
              to="/"
            >
              <FaDiceD20 className="icon" />
              Locate party
            </NavLink>
            <NavLink
              className="header__link"
              activeClassName="header__link_active"
              to="/announcements"
            >
              <GiSpikedDragonHead className="icon" />
              Найти игру
            </NavLink>
            <NavLink
              className="header__link"
              activeClassName="header__link_active"
              to="/user-page"
            >
              <BsFillPersonLinesFill className="icon" />
              Профиль
            </NavLink>
            <NavLink
              className="header__link"
              activeClassName="header__link_active"
              to="/logout"
            >
              <NavLink
                className="header__link"
                activeClassName="header__link_active"
                to="/announcements/new"
              >
                <BsHurricane className="icon" />
                Новый Пост
              </NavLink>
              <IoLogOut className="icon" />
              Выйти
            </NavLink>
          </>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};
