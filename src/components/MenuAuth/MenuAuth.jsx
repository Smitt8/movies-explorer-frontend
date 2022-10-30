import { Link } from 'react-router-dom';
import './MenuAuth.css';

function MenuAuth() {
  return (
    <ul className='menu-auth'>
      <Link className='menu-auth__link' to='/signup'>
        Регистрация
      </Link>
      <Link
        className='menu-auth__link menu-auth__link_type_signin'
        to='/signin'
      >
        Войти
      </Link>
    </ul>
  );
}

export default MenuAuth;
