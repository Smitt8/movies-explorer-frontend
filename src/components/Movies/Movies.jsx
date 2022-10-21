import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import MoviesEmptyList from '../MoviesEmptyList/MoviesEmptyList';
import moviesData from '../../utils/moviesData';
import './Movies.css';

function Movies() {
  // const moviesData = [];
  const movieStyle = moviesData.length === 0 ? 'movies_state_empty' : '';
  return (
    <main className={`movies ${movieStyle}`}>
      <SearchForm />
      {moviesData.length > 0 ? (
        <MoviesCardList moviesData={moviesData} />
      ) : (
        <MoviesEmptyList text='Ничего не найдено' />
      )}
    </main>
  );
}

export default Movies;
