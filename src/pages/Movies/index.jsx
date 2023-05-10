import React from 'react'
import Footer from '../../components/Footer'
import MoviesCard from '../../components/MoviesCard'
import Header from '../../components/Header'
import MoviesCardList from '../../components/MoviesCardList'
import SearchForm from '../../components/SearchForm'

const Movies = () => {
  const components = Array(15).fill(null)
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList>
          <MoviesCard isLiked={true} />
          {components.map((e, i) => (
            <MoviesCard key={i} />
          ))}
        </MoviesCardList>
      </main>
      <Footer />
    </>
  )
}

export default Movies
