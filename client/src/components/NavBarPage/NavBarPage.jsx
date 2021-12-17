import React from "react";
import { NavLink } from "react-router-dom";
import {
  BsFillPersonLinesFill,
  BsGrid1X2Fill,
  BsHurricane,
} from "react-icons/bs";
import { D20Spinning } from "./D20Spinning/D20spinning";
import { IoLogOut } from "react-icons/io5";
<<<<<<< HEAD
import {FaDiceD20} from "react-icons/fa"
import {FcGoogle} from "react-icons/fc"
import {GiSpikedDragonHead} from "react-icons/gi"
=======
import { FaDiceD20 } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GiSpikedDragonHead } from "react-icons/gi";
>>>>>>> a3ed64f5d4c33c9c3ad0b431d30cd8681747d14e

import "./index.css";
import { useSelector } from "react-redux";

export const NavBarPage = (props) => {
  const data = useSelector((state) => state.session);

  console.log("SESSION DATA", data[0]?.id);

  console.log(props);
  return (
    <header className="header">
      <div className="sidenav">
<<<<<<< HEAD
        <D20Spinning setTheme={props.setTheme}/>
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
          <GiSpikedDragonHead className='icon'/>
          Найти игру
        </NavLink>
        <NavLink
=======
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
              <IoLogOut className="icon" />
              Выйти
            </NavLink>

            {/* <NavLink
>>>>>>> a3ed64f5d4c33c9c3ad0b431d30cd8681747d14e
          className="header__link"
          activeClassName="header__link_active"
          to="/login"
        >
<<<<<<< HEAD
          <BsFillPersonLinesFill className='icon'/>
          Профиль
        </NavLink>
        <NavLink
          className="header__link"
          activeClassName="header__link_active"
          to="/logout"
        >
        <IoLogOut className='icon'/>
          Выйти
        </NavLink>
        <NavLink
          className="header__link"
          activeClassName="header__link_active"
          to="/login"
        >
        <FcGoogle className='icon'/>
          Войти
        </NavLink>
        <NavLink
          className="header__link"
          activeClassName="header__link_active"
          to="/news"
        >
          <BsGrid1X2Fill className='icon'/>
          Новости
        </NavLink>
        <NavLink
          className="header__link"
          activeClassName="header__link_active"
          to="/announcements/new"
        >
          <BsHurricane className='icon'/>
          Новый Пост
        </NavLink>
        <NavLink
          className="header__link"
          activeClassName="header__link_active"
          to="/admin"
        >
          Админ
        </NavLink>
=======
        <FcGoogle className='icon'/>
          Войти
        </NavLink> */}

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
          </>
        ) : (
          ""
        )}
>>>>>>> a3ed64f5d4c33c9c3ad0b431d30cd8681747d14e
      </div>
    </header>
  );
};
