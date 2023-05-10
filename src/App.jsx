import React, { useEffect } from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from './context/CurrentUserContext';
import Login from './pages/Login';
import Main from './pages/Main';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Register from './pages/Register';
import SavedMovies from './pages/SavedMovies';
import { moviesApi } from './utils/MoviesApi';

const App = () => {
  const [loading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

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

  return (
    <>
      <CurrentUserContext.Provider>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={<Movies movies={movies} />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </>
  );
};

export default App;
