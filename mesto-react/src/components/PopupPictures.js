export const PopupPictures = (card) => {
console.log(card);
	return (
		<div className={card.card ? "popup popup_blackout" : 'popup'} id="popup-pictures">
			<div className="popup__container popup__container_pictures">
				<button type="button" className="popup__close-button popup__close-button_pictures"></button>
				<img className="popup__pictures" src={card.link} alt={card.name} />
				<p className="popup__pictures-title">{card.name}</p>
			</div>
		</div>
	)
}