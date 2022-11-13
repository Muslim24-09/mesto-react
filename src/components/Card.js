export const Card = ({ card, onCardClick }) => {
	const handleClick = () => {
		onCardClick(card)
	}
	return (<div className="element" key={card._id}>
		<img className="element__image" src={card.link} alt={card.name} onClick={() => handleClick(card)} />
		<div className="element__container">
			<h2 className="element__title">{card.name}</h2>
			<button type="button" className="element__like-button">
				<p className="element__counter-likes">{card.likes.length}</p>
			</button>

		</div>
		<button type="button" className="element__delete-button"></button>
	</div>)
}