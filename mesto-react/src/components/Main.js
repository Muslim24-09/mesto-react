import React, { useEffect, useState } from "react";
import {api} from '../utils/Api.js';

export const Main = ({onEditProfile, onAddPlace, onEditAvatar}) => {
	// userName, userDescription и userAvatar
	const [userName, setUserName] = useState('');
	const [userDescription, setUserDescription] = useState('')
	const [userAvatar, setUserAvatar] = useState('')

	useEffect(() => {
		// setUserDescription(api.getUserInfo)
		 api.getUserInfo().then(res => {
			const userInfo = res


			setUserName(userInfo.name)
			setUserDescription(userInfo.about)
			setUserAvatar(userInfo.avatar)

		})
		
		
	}, [])
	return (
		<main className="content">
			<section className="profile">
      
				<button type='button' className="profile__avatar-btn" title='Редактировать аватар' onClick={onEditAvatar}>
					<img className="profile__avatar" src={userAvatar} alt="аватар профиля" />
				</button>
				<div className="profile__info">

					<h1 className="profile__name">{userName}</h1>
					<button type="button" className="profile__edit-button" title='Редактировать профиль' onClick={onEditProfile}></button>

					<p className="profile__about">{userDescription}</p>
				</div>
				<button type="button" className="profile__add-button" title='Добавить новую карточку' onClick={onAddPlace}></button>
			</section>

			<section className="elements elements-wrapper">

			</section>
			
		</main>
	)
}