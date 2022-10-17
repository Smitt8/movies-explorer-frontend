import Container from '../Container/Container';
import Title from '../Title/Title';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project'>
      <Container>
        <Title>О проекте</Title>
        <ul className='about-project__description'>
          <li className='about-project__column'>
            <h3 className='about-project__heading'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='text'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </li>
          <li className='about-project__column'>
            <h3 className='about-project__heading'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
        <ul className='about-project__progress'>
          <li className='about-project__backend'>1 неделя</li>
          <li className='about-project__frontend'>4 недели</li>
          <li className='about-project__cell'>Back-end</li>
          <li className='about-project__cell'>Front-end</li>
        </ul>
      </Container>
    </section>
  );
}

export default AboutProject;
