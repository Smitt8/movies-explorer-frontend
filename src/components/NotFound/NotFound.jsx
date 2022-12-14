import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound({ onBack }) {
  return (
    <main className='not-found'>
      <div className='not-found__content'>
        <h1 className='not-found__title'>404</h1>
        <p className='not-found__subtitle'>Страница не найдена</p>
      </div>
      <Link onClick={onBack} className='not-found__link'>Назад</Link>
    </main>
  );
};

export default NotFound;