import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import React from 'react';

function MoviesCardList({ isSaved, moviesData }) {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    setMovies(moviesData);
  }, [moviesData]);

  const handleMovieSave = (movie) => {
    movie.saved = !movie.saved;
    setMovies((movies) => movies.map((m) => (m._id === movie._id ? movie : m)));
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
      {movies.length > 12 && (
        <div className='movies-list__more'>
          <button className='movies-list__button'>Еще</button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
