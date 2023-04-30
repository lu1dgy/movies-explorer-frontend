import React from 'react'
import Footer from '../Footer'
import MoviesCard from '../MoviesCard'
import MoviesCardList from '../MoviesCardList'
import SearchForm from '../SearchForm'
import Header from '../Header'

const SavedMovies = () => {
  const components = Array(2).fill(null)

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

export default SavedMovies