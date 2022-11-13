import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import React from 'react';
import useMore from '../../utils/useMore';

function MoviesCardList({ isSaved, moviesData, onSave, onDelete }) {
  const [movies, setMovies] = React.useState([]);
  const [cardsMax, setCardMax] = React.useState(0);
  const { limit, incriment } = useMore();

  React.useEffect(() => {
    if (!isSaved) setMovies(moviesData.slice(0, limit));
    else {
      setMovies(moviesData);
    }
    setCardMax(moviesData.length);
  }, [moviesData, limit, isSaved]);

  return (
    <section className='movies-list'>
      <ul className='movies-list__container'>
        {movies.map((movie) => {
          return (
            <MoviesCard
              key={movie._id || movie.movieId}
              isSaved={isSaved}
              movieCard={movie}
              onSave={onSave}
              onDelete={onDelete}
            />
          );
        })}
      </ul>

      <div className='movies-list__more'>
        {(!isSaved && cardsMax > limit) && (
          <button
            type='button'
            className='movies-list__button'
            onClick={incriment}
          >
            Еще
          </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
