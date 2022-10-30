import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import {moviesData, savedMoviesData} from '../../utils/moviesData';
import userData from '../../utils/userData';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import React from 'react';

function App() {
  return (
    <div className='app'>
    <Switch>
      <Route exact path='/'>
        <Header loggedIn={false} />
        <Main />
        <Footer />
      </Route>
      <Route path='/movies'>
        <Header loggedIn={true} />
        <Movies moviesData={moviesData} savedMoviesData={savedMoviesData} />
        <Footer />
      </Route>
      <Route path='/saved-movies'>
        <Header loggedIn={true} />
        <SavedMovies moviesData={savedMoviesData} />
        <Footer />
      </Route>
      <Route path='/profile'>
        <Header loggedIn={true} />
        <Profile user={userData} />
      </Route>
      <Route path='/signup'>
        <Register />
      </Route>
      <Route path='/signin'>
        <Login />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
