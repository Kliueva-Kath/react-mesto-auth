import React from "react";
import logoPath from "../images/header__logo.svg";
import { Switch, Route, NavLink } from "react-router-dom";
import { useState } from "react";

function Header({ history, email }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  function logout() {
    localStorage.removeItem("jwt");
    history.push("/sign-up");
  }

  return (
    <header className="header">
      <img className="header__logo" src={logoPath} alt="логотип сайта" />
      <Switch>
        <Route path="/sign-in">
          <NavLink to="/sign-up" className="header__link">
            Регистрация
          </NavLink>
        </Route>
        <Route path="/sign-up">
          <NavLink to="/sign-in" className="header__link">
            Войти
          </NavLink>
        </Route>
        <Route exact path="/">
          <div className="header__menu">
            <p className="header__email">{email}</p>
            <button className="button header__logout-button" onClick={logout}>
              Выйти
            </button>
          </div>
        </Route>
      </Switch>
    </header>
  );
}
export default Header;
