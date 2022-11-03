import Api from "./Api";
import { URLS } from "./consts";

class MoviesApi extends Api {
  constructor(url, headers) {
    super(url, headers);
  }
  getMovies() {
    return fetch(this._url, {
      method: "GET",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

export default MoviesApi = new MoviesApi(URLS.movies, {
  "Content-Type": "application/json",
});
