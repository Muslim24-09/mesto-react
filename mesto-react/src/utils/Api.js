const authorisationData = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52', options: {
    authorization: '4d3c9e1d-cc98-4110-97fa-b50511b9880a',
    'Content-Type': 'application/json'
  }
}

class Api {
  _baseUrl;
  _options;

  constructor({ baseUrl, options }) {
    this._baseUrl = baseUrl,
      this._options = options
  }

  _checkResponse(rez) {
    if (rez.ok) {
      return rez.json()
    } else {
      return Promise.reject(`Ошибка: ${rez.status}`)
    }
  }

  getAddingPictures() {

    return fetch(`${this._baseUrl}/cards`, {
      headers: this._options
    })
      .then(rez => this._checkResponse(rez))
  }

  addItem({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._options,
      body: JSON.stringify({
        name: `${name}`,
        link: `${link}`
      })
    })
      .then(rez => this._checkResponse(rez))
  }

  removeItem(itemId) {
    return fetch(`${this._baseUrl}/cards/${itemId}`, {
      method: 'DELETE',
      headers: this._options,
    })
      .then(rez => this._checkResponse(rez))
  }

  likeItem(itemId) {
    return fetch(`${this._baseUrl}/cards/${itemId}/likes`, {
      method: 'PUT',
      headers: this._options
    })
      .then(res => this._checkResponse(res));
  }

  dislikeItem(itemId) {
    return fetch(`${this._baseUrl}/cards/${itemId}/likes`, {
      method: 'DELETE',
      headers: this._options
    })
      .then(res => this._checkResponse(res));
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._options
    })
      .then(rez => this._checkResponse(rez))
  }

  updateUserInfo({ name, about }) {
      return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._options,
      body: JSON.stringify({
        name: `${name}`,
        about: `${about}`
      })
    })
      .then(rez => this._checkResponse(rez))
  }

  updateUserAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._options,
      body: JSON.stringify({
        avatar: `${avatar}`
      })

    })
      .then(rez => this._checkResponse(rez))
  }
}
export const api =  new Api(authorisationData)


