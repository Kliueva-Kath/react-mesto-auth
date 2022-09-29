class Auth {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(data) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ email: data.email, password: data.password }),
    }).then(this._checkResponse);
  }

  authorize(data) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({ email: data.email, password: data.password }),
    }).then(this._checkResponse);
  }

  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include',
    }).then(this._checkResponse);
  }
}

const auth = new Auth({
  baseUrl: "https://api.mesto.kliueva.nomoredomains.club",
  headers: {
    "content-type": "application/json",
  },
});

export default auth;
