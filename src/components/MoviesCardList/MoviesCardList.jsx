import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'
import React from 'react';

function MoviesCardList({ moviesData }) {

  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    setMovies(moviesData);
  }, [moviesData]);

  const handleSave = (movie) => {
    movie.saved = !movie.saved;
    setMovies((movies) =>
      movies.map((m) => (m._id === movie._id ? movie : m)));
  };
  
  return(
    <section className='movies-list'>
      <ul className='movies-list__container'>
        {movies.map((movie) => {
          return (<MoviesCard key={movie._id} movieCard={movie} onSave={handleSave} />)
        })}
      </ul>
      <div className='movies-list__more'>
        <button className='movies-list__button'>Еще</button>
      </div>
    </section>
  );
};

export default MoviesCardList;