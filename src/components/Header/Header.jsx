import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';

function Header({ loggedIn }) {
  const style = !loggedIn ? 'header_pos_promo' : '';
  return (
    <header className={`header ${style}`}>
      <Container className='header__container'>
        <Link to='/'>
          <img className='header__logo' src={logo} alt='Лого сайта' />
        </Link>
        <Navigation loggedIn={loggedIn} />
      </Container>
    </header>
  );
}

export default Header;
