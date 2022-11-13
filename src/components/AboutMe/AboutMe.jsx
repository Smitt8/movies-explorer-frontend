import './AboutMe.css';
import photo from '../../images/photo.jpg';
import Portfolio from '../Portfolio/Portfolio';
import Title from '../Title/Title';
import Container from '../Container/Container';
import MainText from '../MainText/MainText';

function AboutMe() {
  return (
    <section className='about-me'>
      <Container className='about-me__container'>
        <Title>Студент</Title>
        <div className='about-me__info'>
          <div className='about-me__decription'>
            <h3 className='about-me__name'>Игорь</h3>
            <p className='about-me__profession'>Фронтенд-разработчик, 33 года</p>
            <MainText>
              Я родился и живу в Серпухове, закончил факультет ИТ в МГУПИ. Я
              долгое время работал программистом на C. Сейчас открываю для себя мир веб-разработки.
              Для меня это был интересный год полный вызовов и задач, которые мы решали вместе.
            </MainText>
          </div>
          <img
            className='about-me__photo'
            src={photo}
            alt='Фотография молодого человека'
          />
          <a className='about-me__link' href='https://github.com/Smitt8' target='_blank' rel="noreferrer" >
            Github
          </a>
        </div>
        <Portfolio />
      </Container>
    </section>
  );
}

export default AboutMe;
