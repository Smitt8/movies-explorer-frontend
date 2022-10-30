import './Promo.css';
import promo from '../../images/promo.svg'
import Container from '../Container/Container';

function Promo() {
  return (
    <section className='promo'>
      <Container className='promo__container'>
      <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
      <img className='promo__img' src={promo} alt='Курсивом написанные несколько овалов' />
      </Container>
    </section>
  );
}

export default Promo;