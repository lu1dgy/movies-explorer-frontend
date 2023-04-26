import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Movies from './components/Movies'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/main'
          element={<Main />}
        />
        <Route
          path='/movies'
          element={<Movies />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
