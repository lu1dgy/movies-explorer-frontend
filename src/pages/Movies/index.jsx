import React from 'react';
import Footer from '../../components/Footer';
import MoviesCard from '../../components/MoviesCard';
import Header from '../../components/Header';
import MoviesCardList from '../../components/MoviesCardList';
import SearchForm from '../../components/SearchForm';

const Movies = ({ movies }) => {
  console.log(movies);

  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList>
          {movies.map((e, i) => (
            <MoviesCard key={i} {...e} />
          ))}
        </MoviesCardList>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
