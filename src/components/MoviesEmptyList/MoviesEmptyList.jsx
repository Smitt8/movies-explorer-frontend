import './MoviesEmptyList.css';

function MoviesEmptyList({ text }) {
  return (
  <section className='empty-list'>
      {text && <h2 className='empty-list__text'>{text}</h2>}
  </section>
  );
}

export default MoviesEmptyList;
