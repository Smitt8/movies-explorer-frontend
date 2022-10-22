import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import {moviesData, savedMoviesData} from '../../utils/moviesData';

function App() {
  return (
    <div className='app'>
    <Header loggedIn={true} />
    <Switch>
      <Route exact path='/'>
        <Main />
      </Route>
      <Route path='/movies'>
        <Movies moviesData={moviesData} savedMoviesData={savedMoviesData} />
      </Route>
      <Route path='/saved-movies'>
        <SavedMovies moviesData={savedMoviesData} />
      </Route>
    </Switch>
    <Footer />
    </div>
  );
}

export default App;
