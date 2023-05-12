import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import InfoTooltip from './components/InfoTooltip';
import Preloader from './components/Preloader/Preloader';
import { CurrentUserContext } from './context/CurrentUserContext';
import Login from './pages/Login';
import Main from './pages/Main';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Register from './pages/Register';
import SavedMovies from './pages/SavedMovies';
import { tabletCards } from './utils/constants';
import { mobileCards } from './utils/constants';
import { desktopCards } from './utils/constants';
import ProtectedRoute from './utils/hoc/ProtectedRoute';
import { mainApi } from './utils/MainApi';
import { moviesApi } from './utils/MoviesApi';

const App = () => {
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [slicedCardsCount, setSlicedCardsCount] = useState(16);
  const [slicedMoviesList, setSlicedMoviesList] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [emailName, setEmailName] = useState('');
  const [name, setName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [errMessage, setErrorMessage] = useState('');

  const [isInfoTooltipOpen, setisInfoTooltipOpen] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [appLoaded, setAppLoaded] = useState(false);

  // Проверяем куки
  useEffect(() => {
    mainApi
      .getUser()
      .then((data) => {
        setEmailName(data.email);
        setName(data.name);
        setLoggedIn(true);
      })
      .catch((err) => console.log(err))
      .finally(() => setAppLoaded(true));
  }, [loggedIn]);

  const handleLogin = (email, password) => {
    mainApi
      .signIn(email, password)
      .then(() => {
        setEmailName(email);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        setIsSuccess(false);
        setErrorMessage(err.message);
        setisInfoTooltipOpen(true);
      });
  };

  const handleRegister = (name, email, password) => {
    mainApi
      .signUp(name, email, password)
      .then((data) => {
        console.log(data);
        if (data) {
          setLoggedIn(true);
          navigate('/movies', { replace: true });
          setIsSuccess(true);
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setisInfoTooltipOpen(true);
      });
  };

  const handleSignOut = () => {
    mainApi
      .logout()
      .then(() => {
        setLoggedIn(false);
        navigate('/', { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const updateUser = (name, email) => {
    mainApi
      .updateUserInfo(name, email)
      .then((data) => {
        setName(name);
        setEmailName(email);
        setIsSuccess(true);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setIsSuccess(false);
        console.log(err.message);
      })
      .finally(() => {
        setisInfoTooltipOpen(true);
      });
  };

  const getMovies = () => {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((data) => setMovies(data))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  const handleWindowSize = () => {
    if (window.innerWidth > 1280) {
      setSlicedCardsCount(desktopCards);
    } else if (window.innerWidth < 1280 && window.innerWidth > 768) {
      setSlicedCardsCount(tabletCards);
    } else if (window.innerWidth <= 768) {
      setSlicedCardsCount(mobileCards);
    }
  };

  const sliceMovies = (arr) => {
    if (arr) {
      const newArr = arr.slice(0, slicedCardsCount);
      setSlicedMoviesList(newArr);
    }
  };

  const paginateMovies = () => {
    const length = slicedMoviesList.length;
    const newLength = slicedMoviesList.length + slicedCardsCount.more;
    const newArr = filterMovies.slice(length, newLength);
    setSlicedMoviesList([...slicedMoviesList, ...newArr]);
  };

  const closeToolTip = () => {
    setisInfoTooltipOpen(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSize);

    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        {appLoaded ? (
          <Routes>
            <Route path='/' element={<Main />} />
            <Route
              path='/movies'
              element={
                <ProtectedRoute
                  element={Movies}
                  movies={movies}
                  isLoading={loading}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute element={SavedMovies} loggedIn={loggedIn} isLoading={loading} />
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute
                  element={Profile}
                  loggedIn={loggedIn}
                  name={name}
                  onUpdate={updateUser}
                  email={emailName}
                  onExit={handleSignOut}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
            <Route path='/register' element={<Register handleRegister={handleRegister} />} />
            <Route path='/login' element={<Login onLogin={handleLogin} loggedIn={loggedIn} />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        ) : (
          <Preloader />
        )}
        <InfoTooltip
          errMessage={errMessage}
          isOpen={isInfoTooltipOpen}
          status={isSuccess}
          onClose={closeToolTip}
        />
      </CurrentUserContext.Provider>
    </>
  );
};

export default App;
