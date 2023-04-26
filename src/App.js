import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Movies from './components/Movies'
import SavedMovies from './components/SavedMovies'

const App = () => {
  return (
    <>
      <Header />
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
      </Routes>
      <Footer />
    </>
  )
}

export default App
