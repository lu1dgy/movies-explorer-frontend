import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import MoviesCard from '../../components/MoviesCard';
import MoviesCardList from '../../components/MoviesCardList';
import SearchForm from '../../components/SearchForm';
import Header from '../../components/Header';
import Preloader from '../../components/Preloader/Preloader';

const SavedMovies = ({
  isLoading,
  movies,
  loggedIn,
  deleteSavedMovie,
  onFormSubmit,
  toggleDuration,
  searchError,
  isSearchError,
  moviesOnInit,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [checkBoxStatus, setCheckBoxStatus] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [moviesList, setMoviesList] = useState(moviesOnInit);
  const handleInputChange = (e) => {
    if (!searchValue) setErrorMessage('');
    setSearchValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) {
      setErrorMessage('Нужно ввести ключевое слово');
      return;
    }
    setMoviesList(movies);
    onFormSubmit(checkBoxStatus, searchValue);
  };

  const handleCheck = () => {
    setCheckBoxStatus((prevCheckBoxStatus) => !prevCheckBoxStatus);
    toggleDuration(!checkBoxStatus);
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 250);
  };

  // useEffect(() => {
  //   setMoviesList(movies);
  // }, [movies]);

  useEffect(() => {
    setMoviesList(moviesOnInit);
  }, [moviesOnInit]);

  return (
    <>
      <Header />
      <main>
        <SearchForm
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          handleCheck={handleCheck}
          isDisabled={isDisabled}
          searchValue={searchValue}
          checkBoxStatus={checkBoxStatus}
          errorMessage={errorMessage}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList searchError={searchError} isSearchError={isSearchError}>
            {moviesList.map((movie) => (
              <MoviesCard
                key={movie.movieId}
                {...movie}
                loggedIn={loggedIn}
                deleteSavedMovie={deleteSavedMovie}
                isLiked={true}
                isSavedMovies={true}
              />
            ))}
          </MoviesCardList>
        )}
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
