import logo from '../../images/logo.svg';
import { Link, Switch, Route } from 'react-router-dom';
import './AuthContainer.css';

function AuthContainer({ children, title, isValid, onSubmit, submitText, apiError, disabled}) {
  const validStyle = isValid ? '' : 'auth__submit_disabled';
  return (
    <section className='auth'>
      <Link to='/'>
        <img className='auth__logo' src={logo} alt='Лого сайта' />
      </Link>
      <h1 className='auth__title'>{title}</h1>
      <form className='auth__form' onSubmit={onSubmit}>
        <div className='auth__content'>{children}</div>
        <div className='auth__footer'>
          <p className='auth__error'>{apiError}</p>
          <button
            type='submit'
            className={`auth__submit ${validStyle}`}
            disabled={!isValid && disabled}
          >
            {submitText}
          </button>
        </div>
      </form>
      <Switch>
        <Route path='/signup'>
          <p className='auth__text'>
            Уже зарегистрированы?
            <Link className='auth__link' to='/signin'>
              Войти
            </Link>
          </p>
        </Route>
        <Route path='/signin'>
          <p className='auth__text'>
            Еще не зарегистрированы?
            <Link className='auth__link' to='/signup'>
              Регистрация
            </Link>
          </p>
        </Route>
      </Switch>
    </section>
  );
}

export default AuthContainer;
