import React, { useState } from 'react';
import Footer from '../../components/Footer';
import MoviesCard from '../../components/MoviesCard';
import MoviesCardList from '../../components/MoviesCardList';
import SearchForm from '../../components/SearchForm';
import Header from '../../components/Header';
import Preloader from '../../components/Preloader/Preloader';
import { checkboxStatusStorage, searchRequestStorage } from '../../utils/storage';

const SavedMovies = ({
  isLoading,
  movies,
  loggedIn,
  deleteSavedMovie,
  onFormSubmit,
  toggleDuration,
  searchError,
  isSearchError,
}) => {
  const [searchValue, setSearchValue] = useState(searchRequestStorage.get() || '');
  const [errorMessage, setErrorMessage] = useState('');
  const [checkBoxStatus, setCheckBoxStatus] = useState(checkboxStatusStorage.get() || false);
  const [isDisabled, setIsDisabled] = useState(false);
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
    onFormSubmit(checkBoxStatus, searchValue);
    searchRequestStorage.remove();
  };

  const handleCheck = () => {
    setCheckBoxStatus((prevCheckBoxStatus) => !prevCheckBoxStatus);
    toggleDuration(!checkBoxStatus);
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 250);
  };

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
            {movies.map((movie, i) => (
              <MoviesCard
                key={movie.movieId}
                {...movie}
                loggedIn={loggedIn}
                deleteSavedMovie={deleteSavedMovie}
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
