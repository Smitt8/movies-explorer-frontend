import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import React from 'react';
import useMore from '../../utils/useMore';

function MoviesCardList({ isSaved, moviesData }) {
  const [movies, setMovies] = React.useState([]);
  const [cardsMax, setCardMax] = React.useState(0);
  const { limit, incriment } = useMore();

  React.useEffect(() => {
    setMovies(moviesData.slice(0, limit));
    setCardMax(moviesData.length)
  }, [moviesData, limit]);

  const handleMovieSave = (movie) => {
    movie.saved = !movie.saved;
    setMovies((movies) => movies.map((m) => (m.id === movie.id ? movie : m)));
  };

  const handleMovieDelete = (movie) => {
    setMovies((movies) => movies.filter((m) => m._id !== movie._id));
  };

  return (
    <section className='movies-list'>
      <ul className='movies-list__container'>
        {movies.map((movie) => {
          return (
            <MoviesCard
              key={movie._id}
              isSaved={isSaved}
              movieCard={movie}
              onSave={handleMovieSave}
              onDelete={handleMovieDelete}
            />
          );
        })}
      </ul>

      <div className='movies-list__more'>
        {cardsMax > limit && (
          <button type='button' className='movies-list__button' onClick={incriment}>Еще</button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
