import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Register from './pages/Register';
import SavedMovies from './pages/SavedMovies';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
