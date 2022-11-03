import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

// import {moviesData, savedMoviesData} from '../../utils/moviesData';
import userData from "../../utils/userData";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import React from "react";
import MoviesApi from "../../utils/MoviesApi";
import MainApi from "../../utils/MainApi";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [moviesData, setMoviesData] = React.useState([]);
  const [savedMoviesData, setSavedMoviesData] = React.useState([]);

  React.useEffect(() => {
    if (loggedIn) {
      MoviesApi.getMovies().then(res => {
        setMoviesData(res);
      })
      // Promise.all([MoviesApi.getMovies(), MainApi.getSavedMovies()])
      //   .then(([moviesData, savedData]) => {
      //     setSavedMoviesData(savedData);
      //     setMoviesData(moviesData);
      //   })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  return (
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Header loggedIn={loggedIn} />
          <Main />
          <Footer />
        </Route>
        <Route path='/movies'>
          <Header loggedIn={loggedIn} />
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
