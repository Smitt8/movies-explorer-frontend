import { Switch, Route } from 'react-router-dom';
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
              <a className='navigation__link' href='#'>
                Фильмы
              </a>
            </li>
            <li>
              <a className='navigation__link' href='#'>
                Сохраненные фильмы
              </a>
            </li>
          </ul>
        </Route>
      </Switch>
    </nav>
  );
}

export default Navigation;
