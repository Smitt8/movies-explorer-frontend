import './Profile.css';

function Profile({ user }) {
  return (
    <main className='profile'>
      <form className='profile__user'>
      <h1 className='profile__greets'>{`Привет, ${user.name}!`}</h1>
        <div className='profile__container'>
          <label className='profile__label'>
            <span className='profile__text'>Имя</span>
            <input type='text' className='profile__input' value={user.name}/>
            <span className="profile__error">
              Что-то пошло не так...
            </span>
          </label>
          <label className='profile__label'>
            <span className='profile__text'>E-mail</span>
            <input type='text' className='profile__input' value={user.email} />
            <span className="profile__error">
              Что-то пошло не так...
            </span>
          </label>
        </div>
        <div className='profile__buttons'>
          <button type='submit' className='profile__button'>
            Редактировать
          </button>
          <button className='profile__button profile__button_type_signout'>Выйти из аккаунта</button>
        </div>
      </form>
    </main>
  );
}

export default Profile;
