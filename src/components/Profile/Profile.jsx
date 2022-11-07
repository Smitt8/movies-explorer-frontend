import React from 'react';
import useValidation from '../../utils/useValidation';
import { CurrentUserContext } from '../Context/CurrentUserContext';
import Error from '../Error/Error';
import Header from '../Header/Header';
import './Profile.css';

function Profile({ loggedIn, onSubmit, onLogout }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = useValidation(currentUser);
  const [isSubmitEnabled, setIsSubmitEnabled] = React.useState(false);
  const [user, setUser] = React.useState(currentUser);

  const handleUpdProfile = (e) => {
    e.preventDefault();
    onSubmit(values).then((res) => {
      const { name, email } = res;
      setUser({name, email});
    });
  };

  React.useEffect(() => {
    const valid = (isValid && (values.name !== currentUser.name || values.email !== currentUser.email));
    setIsSubmitEnabled(valid)
  }, [isValid, currentUser, values])


  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='profile'>
        <form className='profile__user' onSubmit={handleUpdProfile}>
          <h1 className='profile__greets'>{`Привет, ${user.name || ''}!`}</h1>
          <div className='profile__container'>
            <label className='profile__label'>
              <span className='profile__text'>Имя</span>
              <input
                type='text'
                name='name'
                className='profile__input'
                onChange={handleChange}
                value={values['name'] || ''}
                required
              />
              <Error className='profile__error' text={errors['name']} />
            </label>
            <label className='profile__label'>
              <span className='profile__text'>E-mail</span>
              <input
                type='email'
                name='email'
                className='profile__input'
                onChange={handleChange}
                value={values['email']}
                required
              />
              <Error className='profile__error' text={errors['email'] || ''} />
            </label>
          </div>
          <div className='profile__buttons'>
            <button type='submit' className={`profile__button ${isSubmitEnabled ? '' : 'profile__button_disabled'}`}
            disabled={!isSubmitEnabled}>
              Редактировать
            </button>
            <button
              type='button'
              className='profile__button profile__button_type_signout'
              onClick={onLogout}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Profile;
