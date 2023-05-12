import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import InfoTooltip from './components/InfoTooltip';
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
  const [loggedIn, setLoggedIn] = useState(false);

  const [isInfoTooltipOpen, setisInfoTooltipOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Проверяем токен
  useEffect(() => {
    mainApi
      .getUser()
      .then((data) => {
        setEmailName(data.email);
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .catch((err) => console.log(err));
  }, [loggedIn]);

  const handleLogin = (email, password) => {
    mainApi
      .signIn(email, password)
      .then(() => {
        setEmailName(email);
        setLoggedIn(true);
        navigate('/', { replace: true });
      })
      .catch((err) => {
        setIsSuccess(false);
        setisInfoTooltipOpen(true);
        console.log(err);
      });
  };
  const handleRegister = (name, email, password) => {
    mainApi
      .signUp(name, email, password)
      .then((data) => {
        if (data) {
          navigate('/', { replace: true });
          setIsSuccess(true);
        }
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
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
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies movies={movies} isLoading={loading} />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <InfoTooltip isOpen={isInfoTooltipOpen} status={isSuccess} onClose={closeToolTip} />
      </CurrentUserContext.Provider>
    </>
  );
};

export default App;
