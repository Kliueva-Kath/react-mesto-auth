import AuthForm from "./AuthForm.js";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [values, setValues] = useState({ email: "", password: "" });

  function handleChange(evt) {
    const { value, name } = evt.target;
    setValues({ ...values, [name]: value });
  }

  function onRegister() {}

  return (
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
        value={values.name || ""}
        name="email"
        onChange={handleChange}
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
        value={values.about || ""}
        name="password"
        onChange={handleChange}
        required
      />
      <span className="form__input-error job-input-error"></span>
      <Link to="/signin">Уже зарегистрированы? Войти</Link>
    </AuthForm>
  );
}

//TODO написать класс для Link
