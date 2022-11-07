import React from 'react';
import { CurrentUserContext } from '../Context/CurrentUserContext';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesEmptyList from '../MoviesEmptyList/MoviesEmptyList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies({ loggedIn, isLoadng, errLoading, moviesData, onDelete }) {
  const user = React.useContext(CurrentUserContext);
  const [movieStyle, setMovieStyle] = React.useState('movies_state_empty');
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [isShortcuts, setIsShortcuts] = React.useState(false);

  const handleSubmit = (searchQuery) => {
    setFoundMovies(
      moviesData.filter((m) => {
        return (
          m.nameRU.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.nameEN.toLowerCase().includes(searchQuery.toLowerCase())
        );
      })
    );
  };

  const handleChecked = () => {
    setIsShortcuts(!isShortcuts);
    if (!isShortcuts) {
      sessionStorage.setItem('shortcuts-movies-saved', !isShortcuts);
    } else {
      sessionStorage.removeItem('shortcuts-movies-saved');
    }
  };

  React.useEffect(() => {
    const movies = moviesData.filter((m) => m.owner === user._id);
    setFoundMovies(movies);
    sessionStorage.setItem('foundMovies-saved', JSON.stringify(movies));
  }, [moviesData, user._id]);

  React.useEffect(() => {
    setMovieStyle(foundMovies.length > 0 ? '' : 'movies_state_empty');
  }, [foundMovies]);

  React.useEffect(() => {
    if (isShortcuts) {
      setFoundMovies((foundMovies) =>
        foundMovies.filter((m) => {
          return m.duration < 40;
        })
      );
    } else {
      const cached = JSON.parse(sessionStorage.getItem('foundMovies-saved'));
      if (cached) {
        setFoundMovies(cached);
      }
    }
  }, [isShortcuts]);

  React.useEffect(() => {
    const cachedFoundMovies = JSON.parse(
      sessionStorage.getItem('foundMovies-saved')
    );
    const cachedShortcuts = sessionStorage.getItem('shortcuts-movies-saved');
    if (cachedFoundMovies) {
      setFoundMovies(cachedFoundMovies);
    } 
    if (cachedShortcuts) {
      setIsShortcuts(true);
    }
  }, []);

  return (
    <>
      <Header loggedIn={loggedIn} />
    <main className={`movies ${movieStyle}`}>
      <SearchForm
        isSaved={true}
        isShortcuts={isShortcuts}
        onSubmit={handleSubmit}
        onChecked={handleChecked}
      />
      {foundMovies.length > 0 ? (
        <MoviesCardList isSaved={true} moviesData={foundMovies} onDelete={onDelete}/>
      ) : (
        <MoviesEmptyList isLoadng={isLoadng}
          text={`${
            errLoading
              ? 'Cервер недоступен. Подождите немного и попробуйте ещё раз.'
              : 'Ничего не найдено'
          }`}
        />
      )}
    </main>
    <Footer />
    </>
  );
}

export default SavedMovies;
