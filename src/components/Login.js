import AuthForm from "./AuthForm.js";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import auth from "../utils/Auth.js";

export default function Login({ handleLoginStatus }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function onLogin(evt) {
    evt.preventDefault();
    auth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          handleLoginStatus();
          history.push("/");
          return res;
        } else {
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <AuthForm
      name="login"
      title="Вход"
      buttonText="Войти"
      onSubmit={onLogin}
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
  );
}

//TODO: разобраться с рендерингом при загрузке
