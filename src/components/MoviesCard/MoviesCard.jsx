import './MoviesCard.css'

function MoviesCard({ movieCard, onSave }) {
  const savedStyle = movieCard.saved ? 'card__save_active' : '';
  const savedText = movieCard.saved ? '' : 'Cохранить';

  const handleSave = () => {
    onSave(movieCard);
  }
  return (
    <li className='card'>
      <div className='card__heading'>
        <h3 className='card__title'>{movieCard.nameRU}</h3>
        <span className='card__chrono'>{movieCard.duration}</span>
      </div>
      <img className='card__img' src={movieCard.thumbnail} alt={movieCard.nameRU}/>
      <button className={`card__save ${savedStyle}`} onClick={handleSave}>{savedText}</button>
    </li>
  );
};

export default MoviesCard;