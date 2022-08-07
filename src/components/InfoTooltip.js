import registrSuccessPath from "../images/registration-success.svg";
import registrErrorPath from "../images/registration-error.svg";

export default function InfoTooltip({ isRegistationSuccessful, onClose }) {
  return (
    <div className="tooltip">
      <div className="popup__container">
        <img
          className="tooltip__image"
          src={isRegistationSuccessful ? registrSuccessPath : registrErrorPath}
          alt={
            isRegistationSuccessful
              ? "иконка успешной регистрации"
              : "иконка ошибки регистрации"
          }
        />
        <h2 className="tooltip__text">
          {isRegistationSuccessful
            ? `Вы успешно зарегистрировались!`
            : `Что-то пошло не так! Попробуйте ещё раз.`}
        </h2>
        <button
          className="button popup__close-icon"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}
