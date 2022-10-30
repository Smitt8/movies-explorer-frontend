import Container from '../Container/Container';
import { Link } from 'react-router-dom'
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <Container className='footer__container'>
        <h2 className='footer__title'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className='footer__info'>
          <p className='footer__copyright'>&copy; 2022</p>
          <nav>
            <ul className='footer__nav'>
              <li>
                <Link className='footer__link' to='https://practicum.yandex.ru/'>
                  Яндекс.Практикум
                </Link>
              </li>
              <li>
                <Link className='footer__link' to='https://github.com/Smitt8'>
                  Github
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
