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
import { shortFilmDuration, tabletCards } from './utils/constants';
import { mobileCards } from './utils/constants';
import { desktopCards } from './utils/constants';
import ProtectedRoute from './utils/hoc/ProtectedRoute';
import { mainApi } from './utils/MainApi';
import { moviesApi } from './utils/MoviesApi';
import {
  checkboxStatusStorage,
  filteredMoviesStorage,
  moviesStorage,
  searchRequestStorage,
  valueFilteredMoviesStorage,
} from './utils/storage';

const App = () => {
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [errMessage, setErrorMessage] = useState('');
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [appLoaded, setAppLoaded] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [savedMoviesError, setSavedMoviesError] = useState('');
  const [isSearchError, setIsSearchError] = useState(false);
  const [isSavedError, setIsSavedError] = useState(false);
  const [commonMovies, setCommonMovies] = useState([]);
  const [slicedMovies, setSlicedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [initialSavedMovies, setInitialSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [userSavedMovies, setUserSavedMovies] = useState([]);
  const [checkBoxStatus, setCheckBoxStatus] = useState(checkboxStatusStorage.get() || false);

  //функции данных пользователя
  const getUser = () => {
    mainApi
      .getUser()
      .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);
      })
      .catch((err) => console.log(err))
      .finally(() => setAppLoaded(true));
  };

  const handleLogin = (email, password) => {
    mainApi
      .signIn(email, password)
      .then(() => {
        setLoggedIn(true);
        navigate('/movies', { replace: true });
      })
      .then(() => getUser())
      .catch((err) => {
        setIsSuccess(false);
        setErrorMessage(err.message);
        setIsInfoTooltipOpen(true);
      });
  };

  const handleRegister = (name, email, password) => {
    mainApi
      .signUp(name, email, password)
      .then((user) => {
        mainApi.signIn(user.email, password).then((data) => {
          if (data) {
            setCurrentUser(data);
            setLoggedIn(true);
            navigate('/movies', { replace: true });
            setIsSuccess(true);
          }
        });
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setIsInfoTooltipOpen(true);
      });
  };

  const handleSignOut = () => {
    mainApi
      .logout()
      .then(() => {
        navigate('/', { replace: true });
        setLoggedIn(false);
        clear();
      })
      .catch((err) => console.log(err));
  };

  const updateUser = (name, email) => {
    mainApi
      .updateUserInfo(name, email)
      .then((data) => {
        setCurrentUser({ name, email });
        setIsSuccess(true);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setIsSuccess(false);
        console.log(err.message);
      })
      .finally(() => {
        setIsInfoTooltipOpen(true);
      });
  };

  //функции отвечающие за пагинацию
  const handleWindowSize = () => {
    const width = window.innerWidth;
    if (width > 1279) {
      return desktopCards;
    }
    if (width > 767) {
      return tabletCards;
    }
    return mobileCards;
  };

  const pagination = () => {
    const cardsMoreCount = handleWindowSize();
    const cardsBefore = commonMovies.length;
    const add = cardsMoreCount.pagination;
    const cardsAfter = cardsBefore + add;
    const newMovies = slicedMovies.slice(cardsBefore, cardsAfter);
    setCommonMovies([...commonMovies, ...newMovies]);
  };

  const sliceArr = (arr) => {
    const cardsCount = handleWindowSize();
    if (arr.length > cardsCount.cards) {
      const sliced = arr.slice(0, cardsCount.cards);
      return sliced;
    }
    return arr;
  };

  // функции связанные с фильмами
  const getMoviesApi = () => {
    setIsLoading(true);
    if (!loggedIn) return;
    return moviesApi
      .getMovies()
      .then((movies) => {
        setIsSearchError(false);
        moviesStorage.set(movies);
        return movies;
      })
      .catch((err) => {
        setIsSearchError(true);
        setSearchError('На сервере произошла ошибка, попробуйте еще раз');
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getSavedMovies = () => {
    setIsLoading(true);
    return mainApi
      .getMyMovies()
      .then((movies) => {
        setIsSavedError(false);
        const tmp = movies.map((movie) => {
          return { ...movie, isLiked: true };
        });
        setSavedMovies(tmp);
        setInitialSavedMovies(tmp);
        setUserSavedMovies(tmp);
      })
      .catch((err) => {
        setIsSavedError(true);
        setSavedMoviesError('На сервере произошла ошибка, попробуйте еще раз');
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //фильтруем по вводу юзера
  const valueFilter = (arr, inputText) => {
    return arr.filter((movie) => {
      const en = movie.nameEN.toLowerCase();
      const ru = movie.nameRU.toLowerCase();
      const params = inputText.toLowerCase();
      const result = ru.includes(params) || en.includes(params);
      return result;
    });
  };

  //фильтруем по состоянию чекбокса
  const durationFilter = (arr, isChecked) => {
    return isChecked ? arr.filter((film) => film.duration <= shortFilmDuration) : arr;
  };

  // босс функция фильтраций
  const moviesFilter = (movies, isChecked, inputValue) => {
    if (movies) {
      const filteredByInput = valueFilter(movies, inputValue);
      valueFilteredMoviesStorage.set(filteredByInput);
      const filteredByCheck = durationFilter(filteredByInput, isChecked);
      return filteredByCheck;
    }
    return [];
  };

  const onCheckBoxToggle = async (isChecked) => {
    checkboxStatusStorage.set(!isChecked);
    setCheckBoxStatus((el) => !el);
    const movies = await valueFilteredMoviesStorage.get();
    if (movies) {
      const filteredByCheck = durationFilter(movies, !isChecked);
      setSlicedMovies(filteredByCheck);
      const sliced = sliceArr(filteredByCheck);
      filteredMoviesStorage.set(sliced);
      setCommonMovies(sliced);
    }
    return;
  };

  const toggleDuration = (isChecked) => {
    const moviesToFilter = filteredMovies.length === 0 ? savedMovies : filteredMovies;
    const filteredByCheck = durationFilter(moviesToFilter, isChecked);
    setUserSavedMovies(filteredByCheck);
  };

  const searchMoviesApi = (isChecked, inputValue) => {
    let movies = moviesStorage.get();
    if (!movies) {
      const films = getMoviesApi();
      movies = films;
    }
    const filteredMovies = moviesFilter(movies, isChecked, inputValue);
    filteredMoviesStorage.set(filteredMovies);
    return filteredMovies;
  };

  const handleSearchSubmit = async (isChecked, inputValue) => {
    setIsSearchError(false);
    checkboxStatusStorage.set(isChecked);
    searchRequestStorage.set(inputValue);
    const movies = await searchMoviesApi(isChecked, inputValue);
    setSlicedMovies(movies);
    const films = sliceArr(movies);
    if (films.length === 0) {
      setIsSearchError(true);
      setSearchError('Ничего не найдено');
      valueFilteredMoviesStorage.remove();
      return;
    }
    setCommonMovies(films);
    searchRequestStorage.remove();
    valueFilteredMoviesStorage.remove();

    return films;
  };

  const handleSaveSearchSubmit = (isChecked, inputValue) => {
    setIsSavedError(false);
    const filteredMovies = valueFilter(savedMovies, inputValue);
    setFilteredMovies(filteredMovies);
    const filteredByCheck = durationFilter(filteredMovies, isChecked);
    setUserSavedMovies(filteredByCheck);
    if (filteredByCheck.length === 0) {
      setIsSavedError(true);
      setSavedMoviesError('Ничего не найдено');
      return;
    }
  };

  const addSavedMovie = (data) => {
    return mainApi
      .addMovie(data)
      .then((saved) => {
        setSavedMovies((movies) => [...movies, saved]);
        setUserSavedMovies((movies) => [...movies, saved]);
        setFilteredMovies((movies) => [...movies, saved]);
        return saved;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteSavedMovie = (data) => {
    mainApi
      .deleteMovie(data)
      .then(() => {
        setUserSavedMovies((movies) => movies.filter((movie) => movie._id !== data));
        setFilteredMovies((movies) => movies.filter((movie) => movie._id !== data));
        setSavedMovies((movies) => movies.filter((movie) => movie._id !== data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const isLikedMovie = (arr) => {
    return arr?.map((movie) => {
      const savedMovie = initialSavedMovies.find((saved) => saved.movieId === movie.movieId);
      if (savedMovie) {
        return { ...movie, isLiked: true, _id: savedMovie._id };
      } else {
        return { ...movie, isLiked: false, _id: null };
      }
    });
  };

  const clear = () => {
    localStorage.clear();
    navigate('/');
    setCommonMovies([]);
    setUserSavedMovies([]);
    setInitialSavedMovies([]);
    setSlicedMovies([]);
    setFilteredMovies([]);
    setSavedMovies([]);
    setCurrentUser({});
    setSearchError('');
    setSavedMoviesError('');
    setIsLoading(false);
    setIsSearchError(false);
    setLoggedIn(false);
    setIsSavedError(false);
  };

  const closeToolTip = () => {
    setIsInfoTooltipOpen(false);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const chekcboxStatus = checkboxStatusStorage.get();
      setIsSearchError(false);
      const movies = (await getMoviesApi()) || [];
      const sortMovies = durationFilter(movies, chekcboxStatus);
      setSlicedMovies(sortMovies);
      const sliced = sliceArr(sortMovies);
      setCommonMovies(sliced);
    };

    const fetchSavedMovies = async () => {
      if (loggedIn) {
        setIsSavedError(false);
        filteredMoviesStorage.remove();
        await getSavedMovies();
      }
    };

    const updateFilteredMovies = () => {
      setFilteredMovies(savedMovies);
    };

    const updateIsLikedMovies = () => {
      if (savedMovies.length > 0) {
        isLikedMovie(commonMovies);
      }
    };

    const fetchStoredMovies = () => {
      const films = filteredMoviesStorage.get();
      if (films) {
        setSlicedMovies(films);
        const sliced = sliceArr(films);
        setCommonMovies(sliced);
        return;
      }
    };
    fetchMovies();
    getUser();

    if (loggedIn) {
      fetchSavedMovies();
    }

    updateIsLikedMovies();
    updateFilteredMovies();
    fetchStoredMovies();
  }, [loggedIn, checkBoxStatus]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {appLoaded ? (
        <Routes>
          <Route path='/' element={<Main loggedIn={loggedIn} />} />
          <Route
            path='/movies'
            element={
              <ProtectedRoute
                movies={isLikedMovie(commonMovies)}
                element={Movies}
                onPagintaionClick={pagination}
                isMoviesLeft={
                  commonMovies.length !== slicedMovies.length && commonMovies.length !== 0
                }
                isLoading={loading}
                loggedIn={loggedIn}
                addSavedMovie={addSavedMovie}
                deleteSavedMovie={deleteSavedMovie}
                onFormSubmit={handleSearchSubmit}
                searchError={searchError}
                isSearchError={isSearchError}
                onCheckBoxToggle={onCheckBoxToggle}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                element={SavedMovies}
                movies={userSavedMovies}
                loggedIn={loggedIn}
                isLoading={loading}
                deleteSavedMovie={deleteSavedMovie}
                searchError={savedMoviesError}
                isSearchError={isSavedError}
                onFormSubmit={handleSaveSearchSubmit}
                savedMovies={savedMovies}
                moviesOnInit={initialSavedMovies}
                toggleDuration={toggleDuration}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                name={currentUser.name}
                onUpdate={updateUser}
                email={currentUser.email}
                setCurrentUser={setCurrentUser}
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
  );
};

export default App;
