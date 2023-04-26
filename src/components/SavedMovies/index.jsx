import React from 'react'
import MoviesCard from '../MoviesCard'
import MoviesCardList from '../MoviesCardList'
import SearchForm from '../SearchForm'

const SavedMovies = () => {
  const components = Array(2).fill(null)
  return (
    <div>
      <SearchForm />
      <MoviesCardList>
        <MoviesCard isLiked={true} />
        {components.map((e, i) => (
          <MoviesCard key={i} />
        ))}
      </MoviesCardList>
    </div>
  )
}

export default SavedMovies
