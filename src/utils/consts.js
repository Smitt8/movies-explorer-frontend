const URLS = {
  movies: "https://api.nomoreparties.co/beatfilm-movies",
  main: "https://api.diploma.prokazov.nomorepartiesxyz.ru",
  // main: "http://localhost:3001"
}

const REGEX_NAME = /[A-Za-zА-Яа-я-\s]+$/;
const SHORTCUTS_DURATION = 40;

const CARD_LIMIT_COMP = 12;
const CARD_LIMIT_PAD = 8;
const CARD_LIMIT_PHONE = 5;

const WIDTH_COMP = 1280;
const WIDTH_PAD = 768;
const WIDTH_PHONE = 320;

const INC_COMP = 3;
const INC_PAD = 2;
const INC_PHONE = 2;


export {
  URLS,
  REGEX_NAME,
  SHORTCUTS_DURATION,
  CARD_LIMIT_COMP,
  CARD_LIMIT_PAD,
  CARD_LIMIT_PHONE,
  WIDTH_COMP,
  WIDTH_PAD,
  WIDTH_PHONE,
  INC_COMP,
  INC_PAD,
  INC_PHONE
}
