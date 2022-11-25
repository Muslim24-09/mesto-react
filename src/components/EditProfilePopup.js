import React, { useContext, useEffect, useState } from "react";
import { PopupWithForm } from "./PopupWithForm";
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

export const EditProfilePopup = ({isOpen, onClose, onUpdateUser}) => {
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')

	// Подписка на контекст
const currentUser = useContext(CurrentUserContext);

// После загрузки текущего пользователя из API
// его данные будут использованы в управляемых компонентах.
useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
}, [currentUser]);

const handleSubmit = (e) => {
	e.preventDefault();
	onUpdateUser({
		name,
		about: description,
	})
}

		return (
		<PopupWithForm
			name={'popup-profile'}
			isOpen={isOpen}
			onClose={onClose}
			btnName={'Сохранить'}
			onSubmit={handleSubmit}
			title={'Редактировать профиль'}  >
			<label className="form__field">
				<input type="text" name="name" id='username' required placeholder="Имя"
					className="form__input form__input_type_name" minLength="2" maxLength="40" noValidate onChange={(ev) => setName(ev.target.value)} value={name || ''} />
				<span className="form__error form__input-username-error"></span>
			</label>
			<label className="form__field">
				<input type="text" id='about' name="about" required placeholder="Деятельность"
					className="form__input form__input_type_about" minLength="2" maxLength="200" noValidate onChange={(ev) => setDescription(ev.target.value)} value={description || ''} />
				<span className="form__error form__input-about-error"></span>
			</label>
		</PopupWithForm>
	)
}
