import './MoviesCard.css'

function MoviesCard({ isSaved, movieCard, onSave, onDelete }) {
  const savedStyle = movieCard.saved ? 'card__save_active' : '';
  const savedText = movieCard.saved ? '' : 'Cохранить';

  const handleSave = () => {
    onSave(movieCard);
  }

  const handleDelete = () => {
    onDelete(movieCard);
  }

  return (
    <li className='card'>
      <div className='card__heading'>
        <h3 className='card__title'>{movieCard.nameRU}</h3>
        <span className='card__chrono'>{movieCard.duration}</span>
      </div>
      <img className='card__img' src={movieCard.thumbnail} alt={movieCard.nameRU}/>
      {!isSaved ? (
        <button className={`card__save ${savedStyle}`} onClick={handleSave}>{savedText}</button>
      ) : (
        <button className='card__delete' onClick={handleDelete}></button>
      )} 
    </li>
  );
};

export default MoviesCard;