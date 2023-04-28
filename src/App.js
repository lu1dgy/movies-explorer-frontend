import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Movies from './components/Movies'
import NotFound from './components/NotFound'
import Profile from './components/Profile'
import SavedMovies from './components/SavedMovies'

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/movies'
          element={<Movies />}
        />
        <Route
          path='/saved-movies'
          element={<SavedMovies />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>
  )
}

export default App
