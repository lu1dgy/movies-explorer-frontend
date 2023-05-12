import React from 'react';
import Footer from '../../components/Footer';
import MoviesCard from '../../components/MoviesCard';
import MoviesCardList from '../../components/MoviesCardList';
import SearchForm from '../../components/SearchForm';
import Header from '../../components/Header';
import Preloader from '../../components/Preloader/Preloader';

const SavedMovies = ({ isLoading }) => {
  const components = Array(2).fill(null);

  return (
    <>
      <Header />
      <main>
        <SearchForm />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList>
            <MoviesCard isLiked={true} />
            {components.map((e, i) => (
              <MoviesCard key={i} />
            ))}
          </MoviesCardList>
        )}
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
