import React from 'react'
import MoviesCardList from '../MoviesCardList'
import SearchForm from '../SearchForm'

const Movies = () => {
  return (
    <div>
      <SearchForm />
      <MoviesCardList />
    </div>
  )
}

export default Movies
