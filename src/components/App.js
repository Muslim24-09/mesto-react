import React, { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { PopupPictures } from "./PopupPictures";
import { PopupWithForm } from "./PopupWithForm";

export const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [popupSelector, setPopupSelector] = useState('')
  const [btnName, setBtnName] = useState('')
  const [selectedCard, setSelectedCard] = useState({})
  
  const closeAllPopups = () => {  
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setSelectedCard({})
  }

  const closeAllPopupsEsc = (e) => {
    if (e.key === 'Escape') {
      closeAllPopups()
    }
  }
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  };

  const handleEditProfileClick = () => {
    setPopupSelector('popup-profile')
    setIsEditProfilePopupOpen(true)
    setBtnName('Сохранить')
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
    setBtnName('Создать')
  }

  const handleCardClick = (card) => {
    setSelectedCard(card)
    setBtnName('Создать')
  }

  return (
    <div className="page">
      <div className="page__container" onKeyDown={closeAllPopupsEsc} >
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name={popupSelector}
          isOpen={isEditProfilePopupOpen}
          setIsOpen={setIsEditProfilePopupOpen}
          onClose={closeAllPopups}
          btnName={btnName}  >
          <h2 className="popup__title">Редактировать профиль</h2>
          <label className="form__field">
            <input type="text" name="name" id='username' required placeholder="Имя"
              className="form__input form__input_type_name" minLength="2" maxLength="40" noValidate />
            <span className="form__error form__input-username-error"></span>
          </label>

          <label className="form__field">
            <input type="text" id='about' name="about" required placeholder="Деятельность"
              className="form__input form__input_type_about" minLength="2" maxLength="200" noValidate />
            <span className="form__error form__input-about-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name={popupSelector}
          isOpen={isEditAvatarPopupOpen}
          setIsOpen={setIsEditAvatarPopupOpen}
          onClose={closeAllPopups}
          btnName={btnName}  >
          <h3 className="popup__title">Изменить аватар</h3>
          <label className="form__field">
            <input type="url" name="avatar" id='avatar' required placeholder="Ссылка на аватар"
              className="form__input form__input_type_link" />
            <span className="form__error form__input-avatar-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          name={popupSelector}
          isOpen={isAddPlacePopupOpen}
          setIsOpen={setIsAddPlacePopupOpen}
          btnName={btnName}
          onClose={closeAllPopups}  >
          <h2 className="popup__title">Новое место</h2>
          <label className="form__field">
            <input type="text" name="name" id='name' required placeholder="Название"
              className="form__input form__input_type_title" minLength="2" maxLength="30" />
            <span className="form__error form__input-name-error"></span>
          </label>
          <label className="form__field">
            <input type="url" name="link" id='link' required placeholder="Ссылка на картинку"
              className="form__input form__input_type_link" />
            <span className="form__error form__input-link-error"></span>
          </label>

        </PopupWithForm>
        <PopupPictures card={selectedCard} onClose={closeAllPopups} />
      </div>

      {/* вынесли popup__container_delitem в отдельный div */}
      {/* <div className="popup" id="popup-delItem">
        <div className="popup__container">
          <div className="popup__container_delitem">
            <button className="popup__close-button" title='Закрыть попап'></button>
            <form className="form form_delete-item" name='deleteForm' noValidate>
              <h3 className="popup__title">Вы уверены?</h3>
              <button type="submit" className="form__save-button form__save-button_delitem" title='Удалить карточку'>Да</button>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
}
