import Container from '../Container/Container';
import Title from '../Title/Title';
import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <Container>
        <Title>Технологии</Title>
        <div className='techs__info'>
          <h3 className='techs__title'>7 технологий</h3>
          <p className='text techs__text'>
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className='techs__list'>
            <li className='techs__tech'>HTML</li>
            <li className='techs__tech'>CSS</li>
            <li className='techs__tech'>JS</li>
            <li className='techs__tech'>React</li>
            <li className='techs__tech'>Git</li>
            <li className='techs__tech'>Express.js</li>
            <li className='techs__tech'>mongoDB</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Techs;