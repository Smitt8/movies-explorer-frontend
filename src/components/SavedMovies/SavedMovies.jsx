import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesEmptyList from '../MoviesEmptyList/MoviesEmptyList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies({ moviesData }) {
  const movieStyle = moviesData.length === 0 ? 'saved-movies_state_empty' : '';
  return (
    <main className={`saved-movies ${movieStyle}`}>
      <SearchForm />
      {moviesData.length > 0 ? (
        <MoviesCardList isSaved={true} moviesData={moviesData} />
      ) : (
        <MoviesEmptyList text='Ничего не найдено' />
      )}
    </main>
  );
};

export default SavedMovies;