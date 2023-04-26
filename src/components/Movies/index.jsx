import React from 'react'
import MoviesCard from '../MoviesCard'
import MoviesCardList from '../MoviesCardList'
import SearchForm from '../SearchForm'

const Movies = () => {
  const components = Array(15).fill(null)
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

export default Movies
