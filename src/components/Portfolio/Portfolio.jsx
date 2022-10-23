import { Link } from 'react-router-dom';
import './Portfolio.css'

function Portfolio() {
  return(
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__works'>
        <li className='portfolio__work'>
          <h4 className='portfolio__name'>Статичный сайт</h4>
          <Link className='link portfolio__link' to='https://github.com/Smitt8/how-to-learn'></Link>
        </li>
        <li className='portfolio__work'>
          <h4 className='portfolio__name'>Адаптивный сайт</h4>
          <Link className='link portfolio__link' to='https://github.com/Smitt8/russian-travel'></Link>
        </li>
        <li className='portfolio__work'>
          <h4 className='portfolio__name'>Одностраничное приложение</h4>
          <Link className='link portfolio__link' to='https://github.com/Smitt8/react-mesto-api-full'></Link>
        </li>
      </ul>
    </div>
  )
};

export default Portfolio;