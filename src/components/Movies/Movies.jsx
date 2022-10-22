import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoviesEmptyList from '../MoviesEmptyList/MoviesEmptyList';
import './Movies.css';

function Movies({ moviesData, savedMoviesData }) {
  // const moviesData = [];
  const movieStyle = moviesData.length === 0 ? 'movies_state_empty' : '';
  const movies = moviesData.map(m => {
    return {
      ...m,
      saved: savedMoviesData.some((i) => i.movieId === m._id),
  }});
  return (
    <main className={`movies ${movieStyle}`}>
      <SearchForm />
      {moviesData.length > 0 ? (
        <MoviesCardList isSaved={false} moviesData={movies} />
      ) : (
        <MoviesEmptyList text='Ничего не найдено' />
      )}
    </main>
  );
}

export default Movies;
