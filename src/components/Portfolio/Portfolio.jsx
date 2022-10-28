import './Portfolio.css';

function Portfolio() {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__works'>
        <li className='portfolio__work'>
          <a
            className='portfolio__link'
            href='https://github.com/Smitt8/how-to-learn'
          >
            <h4 className='portfolio__name'>Статичный сайт</h4>
            <div className='portfolio__arrow'></div>
          </a>
        </li>
        <li className='portfolio__work'>
          <a
            className='portfolio__link'
            href='https://github.com/Smitt8/russian-travel'
          >
            <h4 className='portfolio__name'>Адаптивный сайт</h4>
            <div className='portfolio__arrow'></div>
          </a>
        </li>
        <li className='portfolio__work'>
          <a
            className='portfolio__link'
            href='https://github.com/Smitt8/react-mesto-api-full'
          >
            <h4 className='portfolio__name'>Одностраничное приложение</h4>
            <div className='portfolio__arrow'></div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
