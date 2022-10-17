import './Portfolio.css'

function Portfolio() {
  return(
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__works'>
        <li className='portfolio__work'>
          <h4 className='portfolio__name'>Статичный сайт</h4>
          <a className='link portfolio__link' href='#'></a>
        </li>
        <li className='portfolio__work'>
          <h4 className='portfolio__name'>Адаптивный сайт</h4>
          <a className='link portfolio__link' href='#'></a>
        </li>
        <li className='portfolio__work'>
          <h4 className='portfolio__name'>Одностраничное приложение</h4>
          <a className='link portfolio__link' href='#'></a>
        </li>
      </ul>
    </div>
  )
};

export default Portfolio;