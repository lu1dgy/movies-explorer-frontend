import React from 'react';
import Footer from '../../components/Footer';
import MoviesCard from '../../components/MoviesCard';
import Header from '../../components/Header';
import MoviesCardList from '../../components/MoviesCardList';
import SearchForm from '../../components/SearchForm';
import Preloader from '../../components/Preloader/Preloader';
import { useState } from 'react';
import { checkboxStatusStorage, searchRequestStorage } from '../../utils/storage';

const Movies = ({
  movies,
  isLoading,
  onPagintaionClick,
  isMoviesLeft,
  addSavedMovie,
  onFormSubmit,
  deleteSavedMovie,
  onCheckBoxToggle,
  searchError,
  isSearchError,
  loggedIn,
}) => {
  console.log(movies);

  const [searchValue, setSearchValue] = useState(searchRequestStorage.get() || '');
  const [checkBoxStatus, setCheckBoxStatus] = useState(checkboxStatusStorage.get() || false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    if (!searchValue) setErrorMessage('');

    setSearchValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) {
      setErrorMessage('Введите фильм который ищете');
      return;
    }
    onFormSubmit(checkBoxStatus, searchValue);
    searchRequestStorage.remove();
  };

  const handleCheck = () => {
    onCheckBoxToggle(checkBoxStatus);
    setCheckBoxStatus((prevCheckBoxStatus) => !prevCheckBoxStatus);
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
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          handleCheck={handleCheck}
          isDisabled={isDisabled}
          searchValue={searchValue}
          checkBoxStatus={checkBoxStatus}
          errorMessage={errorMessage}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            onPagintaionClick={onPagintaionClick}
            isMoviesLeft={isMoviesLeft}
            searchError={searchError}
            isSearchError={isSearchError}
          >
            {movies.map((e, i) => (
              <MoviesCard
                key={e.movieId}
                {...e}
                addSavedMovie={addSavedMovie}
                deleteSavedMovie={deleteSavedMovie}
                loggedIn={loggedIn}
              />
            ))}
          </MoviesCardList>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Movies;
