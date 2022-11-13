import React from 'react';
import { filterByShortcut, filterByText } from '../../utils/filters';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesEmptyList from '../MoviesEmptyList/MoviesEmptyList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies({ loggedIn, isLoadng, errLoading, moviesData, onDelete, isLoading }) {
  const [movieStyle, setMovieStyle] = React.useState('movies_state_empty');
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [displayedMovies, setDisplayedMovies] = React.useState([]);
  const [isShortcuts, setIsShortcuts] = React.useState(false);

  const handleSubmit = (searchQuery) => {
    setFoundMovies(filterByText(moviesData, searchQuery));
  };

  const handleChecked = () => {
    setIsShortcuts(!isShortcuts);
  };

  React.useEffect(() => {
    setFoundMovies(moviesData);
  }, [moviesData]);

  React.useEffect(() => {
    setMovieStyle(displayedMovies.length > 0 ? '' : 'movies_state_empty');
  }, [displayedMovies]);

  React.useEffect(() => {
      setDisplayedMovies(isShortcuts ? filterByShortcut(foundMovies) : foundMovies);
  }, [isShortcuts, foundMovies]);

  return (
    <>
      <Header loggedIn={loggedIn} />
    <main className={`movies ${movieStyle}`}>
      <SearchForm
        isSaved={true}
        isShortcuts={isShortcuts}
        onSubmit={handleSubmit}
        onChecked={handleChecked}
        isLoading={isLoading}
        />
      {displayedMovies.length > 0 ? (
        <MoviesCardList isSaved={true} moviesData={displayedMovies} onDelete={onDelete}/>
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
