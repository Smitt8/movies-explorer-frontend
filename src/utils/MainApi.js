import Api from "./Api";
import { URLS } from "./consts";

class MainApi extends Api {
  constructor(url, headers) {
    super(url, headers);
  }
  signup({ email, password, name }) {
    return fetch(`${super._url}/signup`, {
      method: 'POST',
      headers: super._headers,
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    }).then((res) => super._checkResponse(res));
  };
  signin({ email, password }) {
    return fetch(`${super._url}/signin`, {
      credentials: 'include',
      method: 'POST',
      headers: super._headers,
      body: JSON.stringify({
        email,
        password,
      })
    }).then((res) => super._checkResponse(res));
  }
  signout() {
    return fetch(`${super._url}/signout`, {
      credentials: 'include',
      method: 'DELETE',
      headers: super._headers,
    })
  };
  getMe(){
    return fetch(`${super._url}/users/me`, {
      credentials: 'include',
      method: 'GET',
      headers: super._headers,
    }).then((res) => super._checkResponse(res));
  };
  updMe({ email, name }) {
    return fetch(`${super._url}/users/me`, {
      credentials: 'include',
      method: 'PATCH',
      headers: super._headers,
      body: JSON.stringify({
        email,
        name,
      }),
    }).then((res) => super._checkResponse(res));
  };
  getSavedMovies() {
    return fetch(`${super._url}/movies`, {
      credentials: 'include',
      method: 'GET',
      headers: super._headers,
    }).then((res) => super._checkResponse(res));
  }
}

export default MainApi = new MainApi(URLS.main, {
  "Content-Type": "application/json",
});
