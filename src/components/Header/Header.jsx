import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';
import { Link, useLocation } from 'react-router-dom';

function Header({ loggedIn }) {
  const { pathname } = useLocation();
  const style = (pathname === '/') ? 'header_pos_promo' : '';
  return (
    <header className={`header ${style}`}>
      <Container className='header__container'>
        <Link className='header__link' to='/'>
          <img className='header__logo' src={logo} alt='Лого сайта' />
        </Link>
        <Navigation loggedIn={loggedIn} />
      </Container>
    </header>
  );
}

export default Header;
