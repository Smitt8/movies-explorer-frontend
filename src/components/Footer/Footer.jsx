import Container from '../Container/Container';
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
                <a className='footer__link' href='#'>
                  Яндекс.Практикум
                </a>
              </li>
              <li>
                <a className='footer__link' href='#'>
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
