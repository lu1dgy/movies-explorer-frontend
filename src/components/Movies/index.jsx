import React from 'react'
import Footer from '../Footer'
import MoviesCard from '../MoviesCard'
import Header from '../Header'
import MoviesCardList from '../MoviesCardList'
import SearchForm from '../SearchForm'

const Movies = () => {
  const components = Array(15).fill(null)
  return (
    <>
      <Header />
      <SearchForm />
      <MoviesCardList>
        <MoviesCard isLiked={true} />
        {components.map((e, i) => (
          <MoviesCard key={i} />
        ))}
      </MoviesCardList>
      <Footer />
    </>
  )
}

export default Movies
