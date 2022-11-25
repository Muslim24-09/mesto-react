import React, { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { ImagePopup } from "./ImagePopup";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from "../utils/api";
import { EditProfilePopup } from "./EditProfilePopup";
import { EditAvatarPopup } from "./EditAvatarPopup";
import { AddPlacePopup } from "./AddPlacePopup";


export const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([])



  useEffect(() => {
    api.getAddingPictures().then(res => setCards(res))
  }, [])


  useEffect(() => {
    api.getUserInfo().then(res => setCurrentUser(res))
  }, [])

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
    setIsEditProfilePopupOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  const handleCardClick = (card) => {
    setSelectedCard(card)
  }

  const handleUpdateUser = (user) => {
    api.updateUserInfo(user).then(res => setCurrentUser(res))
    closeAllPopups()
  }

  const handleUpdateAvatar = (url) => {
    api.updateUserAvatar(url).then(res => setCurrentUser(res))
    closeAllPopups()
  }

  const handleCardLike = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  const handleCardDelete = (card) => {
    api.removeItem(card._id).then(() => setCards(cards.filter((item) => item._id !== card._id)))
  }

  const handleAddPlaceSubmit = (card) => {
    api.addItem(card).then(res => setCards([res, ...cards]))
    card.name = ''
    closeAllPopups()
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container" onKeyDown={closeAllPopupsEsc} >
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
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

    </CurrentUserContext.Provider>
  );
}
