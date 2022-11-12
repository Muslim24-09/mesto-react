export const Main = ({onEditProfile, onAddPlace, onEditAvatar}) => {
	return (
		<main className="content">
			<section className="profile">
      
				<button type='button' className="profile__avatar-btn" title='Редактировать аватар' onClick={onEditAvatar}>
					<img className="profile__avatar" src="<%=require('./images/loader.png')%>" alt="аватар профиля" />
				</button>
				<div className="profile__info">

					<h1 className="profile__name">Loading...</h1>
					<button type="button" className="profile__edit-button" title='Редактировать профиль' onClick={onEditProfile}></button>

					<p className="profile__about"></p>
				</div>
				<button type="button" className="profile__add-button" title='Добавить новую карточку' onClick={onAddPlace}></button>
			</section>

			<section className="elements elements-wrapper">

			</section>
			
		</main>
	)
}