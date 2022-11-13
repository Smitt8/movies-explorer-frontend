import { SHORTCUTS_DURATION } from "./consts";

const filterByText = (movies, query) => {
  return movies.filter((el) => {
    return (
      el.nameRU.toLowerCase().includes(query.toLowerCase()) ||
      el.nameEN.toLowerCase().includes(query.toLowerCase())
    );
  });
};

const filterByShortcut = (movies) => {
  return movies.filter((el) => el.duration < SHORTCUTS_DURATION);
}

export {
  filterByShortcut,
  filterByText,
}