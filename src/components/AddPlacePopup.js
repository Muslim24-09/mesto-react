import { useState } from "react";
import { PopupWithForm } from "./PopupWithForm"

export const AddPlacePopup = ({isOpen, onClose, onAddPlace}) => {
	const [name, setName] = useState('');
	const [link, setLink] = useState('')
	const handleSubmit = (e) => {
		e.preventDefault();
		onAddPlace({
			name: name,
			link: link
		})
		setName('')	
		setLink('')
	}
	return (
		<PopupWithForm
		name={'popup-action'}
		isOpen={isOpen}
		btnName={'Создать'}
		onClose={onClose} 
		title={'Новое место'}
		onSubmit={handleSubmit}
		  >
		<label className="form__field">
			<input type="text" name="name" id='name' required placeholder="Название"
				className="form__input form__input_type_title" minLength="2" maxLength="30" value={name} onChange={(e) => setName(e.target.value)} />
			<span className="form__error form__input-name-error"></span>
		</label>
		<label className="form__field">
			<input type="url" name="link" id='link' required placeholder="Ссылка на картинку"
				className="form__input form__input_type_link" value={link}  onChange={(e) => setLink(e.target.value)}/>
			<span className="form__error form__input-link-error"></span>
		</label>
	</PopupWithForm>
	)
}