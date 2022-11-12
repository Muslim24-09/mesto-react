export const PopupPictures = () => {
	return (
		<div className="popup popup_blackout" id="popup-pictures">
			<div className="popup__container popup__container_pictures">
				<button type="button" className="popup__close-button popup__close-button_pictures"></button>
				<img className="popup__pictures" src='#' alt='' />
				<p className="popup__pictures-title"></p>
			</div>
		</div>
	)
}