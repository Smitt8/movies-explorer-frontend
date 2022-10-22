import { Switch, Route, Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({ loggedIn }) {
  const style = !loggedIn ? `navigation_pos_promo` : '';
  return (
    <nav className={`navigation ${style}`}>
      <Switch>
        <Route exact path='/'>
          <ul className='navigation__list navigation__list_type_auth'>
            <a className='navigation__link' href='#'>
              Регистрация
            </a>
            <a
              className='navigation__link navigation__link_type_signin'
              href='#'
            >
              Войти
            </a>
          </ul>
        </Route>
        <Route>
          <ul className='navigation__list navigation___list_type_movies'>
            <li>
              <Link className='navigation__link' to='/movies'>
                Фильмы
              </Link>
            </li>
            <li>
              <Link className='navigation__link' to='/saved-movies'>
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
            <Link className='navigation__account' to='/'>
              Аккаунт
              <button className='navigation__button'></button>
            </Link>
        </Route>
      </Switch>
    </nav>
  );
}

export default Navigation;
