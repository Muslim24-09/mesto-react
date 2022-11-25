import { useRef } from "react";
import { PopupWithForm } from "./PopupWithForm"

export const EditAvatarPopup = ({ onClose, isOpen, onUpdateAvatar }) => {
	const avatarUrl = useRef()

	const  handleSubmit = (e) => {
		e.preventDefault();
		onUpdateAvatar({
			avatar: avatarUrl.current.value,
		});
		avatarUrl.current.value = '';
	}
	return (
		<PopupWithForm
			name={'popup-change-avatar'}
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
			btnName={'Сохранить'}
			title={'Изменить аватар'}   >
			<label className="form__field">
				<input ref={avatarUrl} type="url" name="avatar" id='avatar' required placeholder="Ссылка на аватар"
					className="form__input form__input_type_link" />
				<span className="form__error form__input-avatar-error"></span>
			</label>
		</PopupWithForm>
	)
}

