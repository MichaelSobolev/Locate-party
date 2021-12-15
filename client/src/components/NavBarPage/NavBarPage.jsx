import React from "react";
import { NavLink } from "react-router-dom";
import {
  BsFillPersonLinesFill,
  BsGrid1X2Fill,
  BsHurricane,
} from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { FaDiceD20 } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GiSpikedDragonHead } from "react-icons/gi";
import { useSelector } from "react-redux";

import "./index.css";

export const NavBarPage = (props) => {
  const data = useSelector((state) => state.session);

  return (
    <header className="header">
      <div className="sidenav">
        <NavLink
          className="header__link"
          activeClassName="header__link_active"
          to="/"
        >
          <FaDiceD20 className="icon" />
          findATable
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

        {data[0]?.id ? (
          <NavLink
            className="header__link"
            activeClassName="header__link_active"
            to="/logout"
          >
            <IoLogOut className="icon" />
            Выйти
          </NavLink>
        ) : (
          <NavLink
            className="header__link"
            activeClassName="header__link_active"
            to="/login"
          >
            <FcGoogle className="icon" />
            Войти
          </NavLink>
        )}

        <NavLink
          className="header__link"
          activeClassName="header__link_active"
          to="/news"
        >
          <BsGrid1X2Fill className="icon" />
          Новости
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
          to="/admin"
        >
          Админ
        </NavLink>
      </div>
    </header>
  );
};
