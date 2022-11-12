import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoviesEmptyList from '../MoviesEmptyList/MoviesEmptyList';
import './Movies.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { filterByShortcut, filterByText } from '../../utils/filters';

function Movies({ loggedIn, moviesData, savedMoviesData, onSave, onDelete, isLoading }) {
  const [movieStyle, setMovieStyle] = React.useState('movies_state_empty');
  const [movies, setMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [displayedMovies, setDisplayedMovies] = React.useState([]);
  const [isInit, setIsInit] = React.useState(true);
  const [isShortcuts, setIsShortcuts] = React.useState(false);

  const handleSubmit = (searchQuery) => {
    setIsInit(searchQuery ? false : true);
    const found = filterByText(movies, searchQuery);
    setFoundMovies(found);
    localStorage.setItem('foundMovies', JSON.stringify(found));
  };

  const handleChecked = () => {
    setIsShortcuts(!isShortcuts);
    if (!isShortcuts) {
      localStorage.setItem('shortcuts-movies', !isShortcuts);
    } else {
      localStorage.removeItem('shortcuts-movies');
    }
  };

  const toggleMovie = (saved, movie) => {
    const newMovie = {
      ...movie,
      saved: !saved,
    };
    const updMovies = foundMovies.map((m) =>
      m.movieId === newMovie.movieId ? newMovie : m
    );
    setFoundMovies(updMovies);
    setMovies((movies) =>
      movies.map((m) => (m.movieId === newMovie.movieId ? newMovie : m))
    );
    localStorage.setItem('foundMovies', JSON.stringify(updMovies));
  };

  const handleMovieSave = (movie) => {
    const { saved } = movie;
    delete movie.saved;
    if (!saved) {
      onSave(movie)
        .then((res) => {
          toggleMovie(saved, res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      onDelete(movie).then((res) => {
        console.log(res);
        toggleMovie(saved, movie);
      });
    }
  };

  React.useEffect(() => {
    setMovies(
      moviesData.map((m) => {
        return {
          country: m.country,
          director: m.director,
          duration: m.duration,
          year: m.year,
          description: m.description,
          image: 'https://api.nomoreparties.co/' + m.image.url,
          trailerLink: m.trailerLink,
          thumbnail: 'https://api.nomoreparties.co/' + m.thumbnail,
          movieId: m.id,
          nameRU: m.nameRU,
          nameEN: m.nameEN,
          saved: savedMoviesData.some((s) => s.movieId === m.id),
        };
      })
    );
  }, [moviesData, savedMoviesData]);

  React.useEffect(() => {
    const displayed = isShortcuts ? filterByShortcut(foundMovies) : foundMovies;
    setMovieStyle(displayed.length > 0 ? '' : 'movies_state_empty');
    setDisplayedMovies(displayed);
  }, [isShortcuts, foundMovies]);

  React.useEffect(() => {
    let cachedFoundMovies = JSON.parse(localStorage.getItem('foundMovies'));
    const cachedShortcuts = localStorage.getItem('shortcuts-movies');
    if (cachedFoundMovies) {
      cachedFoundMovies = cachedFoundMovies.map((m) => {
        return {
          ...m,
          saved: savedMoviesData.some((s) => s.movieId === m.movieId),
        };
      });
      setFoundMovies(cachedFoundMovies);
      localStorage.setItem('foundMovies', JSON.stringify(cachedFoundMovies));
      setIsInit(cachedFoundMovies.length ? false : true);
    }
    if (cachedShortcuts) {
      setIsShortcuts(true);
    }
  }, [savedMoviesData]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className={`movies ${movieStyle}`}>
        <SearchForm
          isSaved={false}
          isShortcuts={isShortcuts}
          onSubmit={handleSubmit}
          onChecked={handleChecked}
          isLoading={isLoading}
        />
        {!isInit ? (
          displayedMovies.length > 0 ? (
            <MoviesCardList
              isSaved={false}
              moviesData={displayedMovies}
              onSave={handleMovieSave}
              onDelete={onDelete}
            />
          ) : (
            <MoviesEmptyList text='Ничего не найдено' />
          )
        ) : (
          <MoviesEmptyList isLoading={isLoading} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
