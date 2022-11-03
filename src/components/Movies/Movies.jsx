import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import MoviesEmptyList from "../MoviesEmptyList/MoviesEmptyList";
import "./Movies.css";
import React from "react";

function Movies({ moviesData, savedMoviesData }) {
  const [movieStyle, setMovieStyle] = React.useState("movies_state_empty");
  const movies = moviesData.map((m) => {
    return {
      ...m,
      saved: savedMoviesData.some((i) => i.movieId === m.id),
    };
  });
  const [foundMovies, setFoundMovies] = React.useState([]);
  const [isInit, setIsInit] = React.useState(true);
  const [isShortcuts, setIsShortcuts] = React.useState(false);
  const [cardsLimit, setCardLimit] = React.useState(12);

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
      sessionStorage.setItem("shortcuts-movies", !isShortcuts);
    } else {
      sessionStorage.removeItem("shortcuts-movies");
    }
  };

  const handleMore = () => {
    setCardLimit((cardsLimit) => (cardsLimit += 3));
  };

  React.useEffect(() => {
    setMovieStyle(foundMovies.length > 0 ? "" : "movies_state_empty");
    if (!isInit && !isShortcuts) sessionStorage.setItem("foundMovies", JSON.stringify(foundMovies));
  }, [foundMovies]);

  React.useEffect(() => {
    if (isShortcuts) {
      setFoundMovies((foundMovies) =>
        foundMovies.filter((m) => {
          return m.duration < 40;
        })
      );
    } else {
      const cached = JSON.parse(sessionStorage.getItem("foundMovies"));
      if (cached) {
        setFoundMovies(cached);
      }
    }
  }, [isShortcuts]);

  React.useEffect(() => {
    const cachedFoundMovies = JSON.parse(sessionStorage.getItem("foundMovies"));
    const cachedShortcuts = sessionStorage.getItem("shortcuts-movies");
    if (cachedFoundMovies) {
      setFoundMovies(cachedFoundMovies);
      setIsInit(() => (cachedFoundMovies.length ? false : true));
    }
    if (cachedShortcuts) {
      setIsShortcuts(true);
    }
  }, []);

  return (
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
          />
        ) : (
          <MoviesEmptyList text='Ничего не найдено' />
        )
      ) : (
        <MoviesEmptyList />
      )}
    </main>
  );
}

export default Movies;
