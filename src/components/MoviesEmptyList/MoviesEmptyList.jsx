import './MoviesEmptyList.css';
import Preloader from '../Preloader/Preloader';

function MoviesEmptyList({ text, isLoading }) {
  return (
    <section className='empty-list'>
      {isLoading ? (
        <Preloader />
      ) : (
        text && <h2 className='empty-list__text'>{text}</h2>
      )}
    </section>
  );
}

export default MoviesEmptyList;
