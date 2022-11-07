import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoviesEmptyList from '../MoviesEmptyList/MoviesEmptyList';
import './Movies.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { CurrentUserContext } from '../Context/CurrentUserContext';

function Movies({ loggedIn, moviesData, savedMoviesData, onSave, onDelete, isLoading }) {
  const [movieStyle, setMovieStyle] = React.useState('movies_state_empty');
  const [movies, setMovies] = React.useState([]);
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [isInit, setIsInit] = React.useState(true);
  const [isShortcuts, setIsShortcuts] = React.useState(false);
  const [cardsLimit, setCardLimit] = React.useState(12);
  const user = React.useContext(CurrentUserContext);

  const handleSubmit = (searchQuery) => {
    setIsInit(searchQuery ? false : true);
    setFoundMovies(
      movies.filter((m) => {
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
      sessionStorage.setItem('shortcuts-movies', !isShortcuts);
    } else {
      sessionStorage.removeItem('shortcuts-movies');
    }
  };

  const handleMore = () => {
    setCardLimit((cardsLimit) => (cardsLimit += 3));
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
    sessionStorage.setItem('foundMovies', JSON.stringify(updMovies));
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
          saved: savedMoviesData.some((s) => (s.movieId === m.id && s.owner === user._id)),
        };
      })
    );
  }, [moviesData, savedMoviesData]);

  React.useEffect(() => {
    setMovieStyle(foundMovies.length > 0 ? '' : 'movies_state_empty');
    if (!isInit && !isShortcuts)
      sessionStorage.setItem('foundMovies', JSON.stringify(foundMovies));
  }, [foundMovies]);

  React.useEffect(() => {
    if (isShortcuts) {
      setFoundMovies((foundMovies) =>
        foundMovies.filter((m) => {
          return m.duration < 40;
        })
      );
    } else {
      const cached = JSON.parse(sessionStorage.getItem('foundMovies'));
      if (cached) {
        setFoundMovies(cached);
      }
    }
  }, [isShortcuts]);

  React.useEffect(() => {
    let cachedFoundMovies = JSON.parse(sessionStorage.getItem('foundMovies'));
    const cachedShortcuts = sessionStorage.getItem('shortcuts-movies');
    if (cachedFoundMovies) {
      cachedFoundMovies = cachedFoundMovies.map((m) => {
        return {
          ...m,
          saved: savedMoviesData.some((s) => s.movieId === m.movieId),
        };
      });
      setFoundMovies(cachedFoundMovies);
      sessionStorage.setItem('foundMovies', JSON.stringify(cachedFoundMovies));
      setIsInit(() => (cachedFoundMovies.length ? false : true));
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
          isSaved={false}
          isShortcuts={isShortcuts}
          onSubmit={handleSubmit}
          onChecked={handleChecked}
        />
        {!isInit ? (
          foundMovies.length > 0 ? (
            <MoviesCardList
              isSaved={false}
              moviesData={foundMovies}
              cardsLimit={cardsLimit}
              onMore={handleMore}
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
