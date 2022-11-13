import Api from "./Api";
import { URLS } from "./consts";

class MainApi extends Api {
  constructor(url, headers) {
    super(url, headers);
    this._url = `${this._url}/api`
  }

  signup({ email, password, name }) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    }).then((res) => this._checkResponse(res));
  };
  signin({ email, password }) {
    return fetch(`${this._url}/signin`, {
      credentials: 'include',
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      })
    }).then((res) => this._checkResponse(res));
  }
  signout() {
    return fetch(`${this._url}/signout`, {
      credentials: 'include',
      method: 'DELETE',
      headers: this._headers,
    })
  };
  getMe(){
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
      method: 'GET',
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  };
  updMe({ email, name }) {
    return fetch(`${this._url}/users/me`, {
      credentials: 'include',
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        email,
        name,
      }),
    }).then((res) => this._checkResponse(res));
  };
  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
      method: 'GET',
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  };
  saveMovie(movie) {
    return fetch(`${this._url}/movies`, {
      credentials: 'include',
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(movie),
    }).then((res) => this._checkResponse(res));
  };
  deleteMovie(_id) {
    return fetch(`${this._url}/movies/${_id}`, {
      credentials: 'include',
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }
}

export default MainApi = new MainApi(URLS.main, {
  "Content-Type": "application/json",
});
