import AuthForm from "./AuthForm.js";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import auth from "../utils/Auth.js";

export default function Register({
  setRegistationSuccessful,
  handleInfoTooltipPopupOpen,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function onRegister(evt) {
    evt.preventDefault();
    auth
      .register(email, password)
      .then((res) => {
        setRegistationSuccessful(true);
        handleInfoTooltipPopupOpen();
        history.push("/sign-in");
      })
      .catch((err) => {
        setRegistationSuccessful(false);
        handleInfoTooltipPopupOpen();
      });
  }

  return (
    <>
      <AuthForm
        name="register"
        title="Регистрация"
        buttonText="Зарегистрироваться"
        onSubmit={onRegister}
        loadingText="Сохранение..."
      >
        <input
          type="email"
          className="form__input form__input_type_auth"
          id="email-input"
          placeholder="Email"
          minLength="2"
          maxLength="40"
          value={email || ""}
          name="email"
          onChange={handleEmailChange}
          required
        />
        <span className="form__input-error name-input-error"></span>
        <input
          type="password"
          className="form__input form__input_type_auth"
          id="password-input"
          placeholder="Пароль"
          minLength="2"
          maxLength="200"
          value={password || ""}
          name="password"
          onChange={handlePasswordChange}
          required
        />
        <span className="form__input-error job-input-error"></span>
      </AuthForm>
      <p className="auth-form__redirect">
        Уже зарегистрированы?
        <Link to="/signin" className="auth-form__link">
          Войти
        </Link>
      </p>
    </>
  );
}
