import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillPersonLinesFill, BsHurricane } from "react-icons/bs";
import { D20Spinning } from "./D20Spinning/D20spinning";
import { IoLogOut } from "react-icons/io5";
import { FaDiceD20 } from "react-icons/fa";
import { GiSpikedDragonHead } from "react-icons/gi";

import "./index.css";

export const NavBarPage = (props) => {
  return (
    <header className="header">
      <div className="sidenav">
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
            to={`/user-page/${props.userId}`}
          >
            <BsFillPersonLinesFill className="icon" />
            Профиль
          </NavLink>

          <NavLink
            className="header__link"
            activeClassName="header__link_active"
            to="/announcements/new"
          >
            <BsHurricane className="icon" />
            Новый Пост
          </NavLink>
          <NavLink
            className="header__link"
            activeClassName="header__link_active"
            to="/changeGoogleProfile"
          >
            <IoLogOut className="icon" />
            Перезайти
          </NavLink>
        </>
      </div>
    </header>
  );
};
