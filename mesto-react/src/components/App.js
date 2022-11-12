import React, { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { PopupWithForm } from "./PopupWithForm";

export const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  // const [closeAllPopups, setCloseAllPopups] = useState(true)
  const [popupSelector, setPopupSelector] = useState('')
  const [btnName, setBtnName] = useState('')

  const documentListener = (e) => {
    if (e.target.classList.contains('popup__close-button') || e.target.classList.contains('popup_opened') || e.key === 'Escape') {
      setIsEditAvatarPopupOpen(false)
      setIsEditProfilePopupOpen(false)
      setIsAddPlacePopupOpen(false)
      // setCloseAllPopups(true)
    }
  }
  const handleEditAvatarClick = () => {

    setIsEditAvatarPopupOpen(true)
    // setCloseAllPopups(false)
  };
  const handleEditProfileClick = () => {
    setPopupSelector('popup-profile')
    
    setIsEditProfilePopupOpen(true)
    // setCloseAllPopups(false)
    setBtnName('Ok')
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
    // setCloseAllPopups(false)

  }


  return (
    <div className="page">
      <div className="page__container" onClick={documentListener} onKeyDown={documentListener}>
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
        <Footer />
        <PopupWithForm 
        name={popupSelector} 
        isOpen={isEditProfilePopupOpen} 
        setIsOpen={setIsEditProfilePopupOpen}
        // onClose={closeAllPopups}
        // setOnClose={setCloseAllPopups}
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
        <PopupWithForm name={popupSelector} isOpen={isEditAvatarPopupOpen} setIsOpen={setIsEditAvatarPopupOpen} btnName={btnName}  >
          <h3 className="popup__title">Изменить аватар</h3>
          <label className="form__field">
            <input type="url" name="avatar" id='avatar' required placeholder="Ссылка на аватар"
              className="form__input form__input_type_link" />
            <span className="form__error form__input-avatar-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm name={popupSelector} isOpen={isAddPlacePopupOpen} setIsOpen={setIsAddPlacePopupOpen} btnName={btnName}  >
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
      </div>

      {/* <div className="popup" id="popup-profile">
        <div className="popup__container">
          <button type="button" className="popup__close-button"></button>


          <form className="form form_profile" name="edit__profile">



            <button type="submit" className="form__save-button form__save-button_disabled">Сохранить</button>
          </form>
        </div>
      </div> */}

      {/* <div className="popup" id="popup-action">
        <div className="popup__container">
          <form className="form form_card" name="add__profile" noValidate>
            <button type="button" className="popup__close-button popup__close-button_action"></button>

            <button type="submit" className="form__save-button form__save-button_disabled">Создать</button>
          </form>

        </div>
      </div> */}




      {/* вынесли popup__container_delitem в отдельный div */}
      <div className="popup" id="popup-delItem">
        <div className="popup__container">
          <div className="popup__container_delitem">
            <button className="popup__close-button" title='Закрыть попап'></button>
            <form className="form form_delete-item" name='deleteForm' noValidate>
              <h3 className="popup__title">Вы уверены?</h3>
              <button type="submit" className="form__save-button form__save-button_delitem" title='Удалить карточку'>Да</button>
            </form>
          </div>
        </div>
      </div>




      {/* <div className="popup" id="popup-change-avatar">
        <div className='popup__container'>
          <button className="popup__close-button" title='Закрыть попап'></button>
          <form action="#" className="form form_change-avatar" name='changeAvatar' noValidate>
           
            <button type="submit" className="form__save-button form__save-button_disabled">Создать</button>
          </form>
        </div>
      </div> */}


      <template className="element__template">
        <div className="element">
          <img className="element__image" alt="" />
          <div className="element__container">
            <h2 className="element__title"></h2>
            <button type="button" className="element__like-button">
              <p className="element__counter-likes"></p>
            </button>

          </div>
          <button type="button" className="element__delete-button"></button>
        </div>
      </template>
    </div>
  );
}
