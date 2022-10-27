import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const [isBurgerOpen, setBurgerOpen] = React.useState(false);
  const style = (isBurgerOpen) ? 'menu_opened' : '';
  const toggleBurger = () => setBurgerOpen(!isBurgerOpen);

  return (
    <>
      <button className='menu__burger' onClick={toggleBurger}></button>
      <div className={`menu ${style}`}>
        <button className='menu__close' onClick={toggleBurger}></button>
        <div className='menu__container'>
          <ul className='menu__list'>
            <li>
              <NavLink className='menu__link menu__link_home' activeClassName='menu__link_active' exact to='/'>
                Главная
              </NavLink>
            </li>
            <li>
            <NavLink className='menu__link' activeClassName='menu__link_active' to='/movies'>
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink className='menu__link' activeClassName='menu__link_active' to='/saved-movies'>
                Сохраненные фильмы
              </NavLink>
            </li>
          </ul>
          <Link className='menu__account' to='/profile'>
            Аккаунт
            <button className='menu__button'></button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Menu;
