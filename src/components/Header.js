import React from "react";
import logoPath from "../images/header__logo.svg";
import { Switch, Route, NavLink } from "react-router-dom";

function Header() {
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
        <Route exact path="/"></Route>
      </Switch>
    </header>
  );
}
export default Header;
