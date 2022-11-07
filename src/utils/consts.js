const URLS = {
  movies: "https://api.nomoreparties.co/beatfilm-movies",
  main: "https://api.diploma.prokazov.nomorepartiesxyz.ru",
  // main: "http://localhost:3001"
}

const REGEX_NAME = /[A-Za-zА-Яа-я-\s]+$/;
const FETCH_ERR = /'fetch'/;

export {
  URLS,
  REGEX_NAME,
  FETCH_ERR
}
