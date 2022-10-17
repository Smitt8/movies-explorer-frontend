import './AboutMe.css';
import photo from '../../images/photo.jpg';
import Portfolio from '../Portfolio/Portfolio';
import Title from '../Title/Title';
import Container from '../Container/Container';

function AboutMe() {
  return (
    <section className='about-me'>
      <Container>
        <Title>Студент</Title>
        <div className='about-me__info'>
          <div className='about-me__decription'>
            <h3 className='about-me__name'>Игорь</h3>
            <p className='about-me__profession'>Фронтенд-разработчик, 30 лет</p>
            <p className='text'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          </div>
          <img
            className='about-me__photo'
            src={photo}
            alt='Фотография молодого человека'
          />
          <a className='about-me__link' href='#'>
            Github
          </a>
        </div>
        <Portfolio />
      </Container>
    </section>
  );
}

export default AboutMe;
