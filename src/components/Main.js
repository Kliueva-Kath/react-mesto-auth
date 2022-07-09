import React from "react";
import App from "./App.js";
import PopupWithForm from "./PopupWithForm.js";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userInfo) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getCards()
      .then((cardsInfo) => {
        setCards(cardsInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__account">
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
          >
            <button
              className="button profile__avatar-edit"
              type="button"
              onClick={props.onEditAvatar}
            ></button>
          </div>

          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__job">{userDescription}</p>
            <button
              className="button profile__edit-button"
              type="button"
              onClick={props.onEditProfile}
            ></button>
          </div>
        </div>
        <button
          className="button profile__add-button"
          type="button"
          onClick={props.onAddCard}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__container">
          {cards.map((card) => {
            return <Card key={card._id} card={card} />;
          })}
          {/* <template className="cards-template">
            <li className="element">
              <button
                className="button element__delete-button"
                type="button"
              ></button>
              <img className="element__photo" />
              <div className="element__bttm-panel">
                <h2 className="element__title"></h2>
                <div className="element__likes">
                  <button
                    className="button element__like"
                    type="button"
                  ></button>
                  <p className="element__likes-count"></p>
                </div>
              </div>
            </li>
          </template> */}
        </ul>
      </section>
    </main>
  );
}

export default Main;
