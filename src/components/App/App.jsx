import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import './App.css';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

// import {moviesData, savedMoviesData} from '../../utils/moviesData';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import React from 'react';
import MoviesApi from '../../utils/MoviesApi';
import MainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../Context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {
  const [user, setUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [moviesData, setMoviesData] = React.useState([]);
  const [savedMoviesData, setSavedMoviesData] = React.useState([]);
  const [apiError, setApiError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isToolOpen, setIsToolOpen] = React.useState(false);
  const [isOK, setIsOk] = React.useState(true);
  const [toolMessage, setToolMessage] = React.useState('');
  const history = useHistory();

  React.useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
      Promise.all([MoviesApi.getMovies(), MainApi.getSavedMovies()])
        .then(([moviesData, savedData]) => {
          setSavedMoviesData(savedData);
          setMoviesData(moviesData);
        })
        .catch((err) => {
          const { message } = err;
          setIsToolOpen(true);
          setIsOk(false);
          setToolMessage(message);
          console.log(message);
          if (message === 'Пожалуйста авторизуйтесь.') {
            handleSignout()
          }
          return Promise.reject(err);
        })
        .finally(() => setIsLoading(false));
    }
  }, [loggedIn]);

  React.useEffect(() => {
    const authorized = localStorage.getItem('auth');
    if (authorized) {
      MainApi.getMe().then((res) => {
        const { name, email } = res;
        setLoggedIn(true);
        setUser({ name, email });
      }).catch((err) => {
        setLoggedIn(false);
        localStorage.removeItem('auth');
      });
    }
  }, [history]);

  const handleSignup = ({ name, email, password }) => {
    MainApi.signup({ email, name, password })
      .then((res) => {
        console.log(res);
        handleSignin({ email, password });
      })
      .catch((err) => {
        setApiError(err.message);
      });
  };

  const handleSignin = ({ email, password }) => {
    MainApi.signin({ email, password })
      .then((res) => {
        const { email, name } = res;
        setUser({ email, name });
        setLoggedIn(true);
        localStorage.setItem('auth', true);
        history.push('/movies');
      })
      .catch((err) => {
        setApiError(err.message.match('fetch') ? 'Сервер недоступен' : err.message);
      });
  };

  const resetApiError = () => {
    setApiError('');
  };

  const handleSignout = () => {
    MainApi.signout()
      .then(() => {
        setLoggedIn(false);
        localStorage.clear();
        localStorage.removeItem('auth');
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdProfile = ({ email, name }) => {
    return MainApi.updMe({ email, name })
      .then((res) => {
        const { email, name } = res;
        setUser({email, name});
        setIsToolOpen(true);
        setIsOk(true);
        setToolMessage('Данные успешно обновлены!');
        return res;
      })
      .catch((err) => {
        setIsToolOpen(true);
        setIsOk(false);
        setToolMessage(err.message);
        return Promise.reject(err);
      });
  };

  const handleSaveMovie = (movie) => {
    setIsLoading(true);
    return MainApi.saveMovie(movie)
      .then((res) => {
        savedMoviesData.push(res);
        setSavedMoviesData(savedMoviesData);
        return res;
      })
      .catch((err) => {
        const { message } = err;
        setIsToolOpen(true);
        setIsOk(false);
        setToolMessage(message);
        if (message === 'Пожалуйста авторизуйтесь.') {
          handleSignout()
        }
        return Promise.reject(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleDeleteMovie = (movie) => {
    const { _id } = savedMoviesData.find((m) => m.movieId === movie.movieId);
    setIsLoading(true);
    return MainApi.deleteMovie(_id)
      .then((res) => {
        setSavedMoviesData((savedMoviesData) =>
          savedMoviesData.filter((m) => m.movieId !== movie.movieId)
        );
        return res;
      })
      .catch((err) => {
        const { message } = err;
        setIsToolOpen(true);
        setIsOk(false);
        setToolMessage(err.message);
        if (message === 'Пожалуйста авторизуйтесь.') {
          handleSignout()
        }
        return Promise.reject(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleGoBack = () => {
    history.goBack();
  };

  const handeCloseTool = () => {
    setIsToolOpen(false);
    setToolMessage('');
  }

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={user}>
        <Switch>
          <Route exact path='/'>
            <Header loggedIn={loggedIn} />
            <Main />
            <Footer />
          </Route>
          <Route path='/movies'>
            <ProtectedRoute
              path='/movies'
              loggedIn={loggedIn}
              component={Movies}
              moviesData={moviesData}
              savedMoviesData={savedMoviesData}
              onSave={handleSaveMovie}
              onDelete={handleDeleteMovie}
              isLoading={isLoading}
            />
          </Route>
          <Route path='/saved-movies'>
            <ProtectedRoute
              path='/saved-movies'
              loggedIn={loggedIn}
              component={SavedMovies}
              isLoading={isLoading}
              moviesData={savedMoviesData}
              onDelete={handleDeleteMovie}
            />
          </Route>
          <Route path='/profile'>
            <ProtectedRoute
              path='/profile'
              loggedIn={loggedIn}
              component={Profile}
              onLogout={handleSignout}
              onSubmit={handleUpdProfile}
            />
          </Route>
          <Route path='/signup'>
            {loggedIn && <Redirect to='/movies' /> }
            <Register
              onRegister={handleSignup}
              apiError={apiError}
              resetApiError={resetApiError}
            />
          </Route>
          <Route path='/signin'>
            {loggedIn && <Redirect to='/movies' /> }
            <Login
              onLogin={handleSignin}
              apiError={apiError}
              resetApiError={resetApiError}
            />
          </Route>
          <Route path='*'>
            <NotFound onBack={handleGoBack} />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
      <InfoTooltip isOpen={isToolOpen} isOK={isOK} errMessage={toolMessage} onClose={handeCloseTool} />
    </div>
  );
}

export default App;
