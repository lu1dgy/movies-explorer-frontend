import React, { useState } from 'react';
import Footer from '../../components/Footer';
import MoviesCard from '../../components/MoviesCard';
import MoviesCardList from '../../components/MoviesCardList';
import SearchForm from '../../components/SearchForm';
import Header from '../../components/Header';
import Preloader from '../../components/Preloader/Preloader';
import { checkboxSavedStatusStorage, searchSavedRequestStorage } from '../../utils/storage';

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
  const [searchValue, setSearchValue] = useState(searchSavedRequestStorage.get() || '');
  const [errorMessage, setErrorMessage] = useState('');
  const [checkBoxStatus, setCheckBoxStatus] = useState(checkboxSavedStatusStorage.get() || false);
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
    searchSavedRequestStorage.set(searchValue);
    checkboxSavedStatusStorage.set(checkBoxStatus);
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

  React.useEffect(() => {
    setMoviesList(movies);
  }, [movies]);

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
            {moviesList.map((movie, i) => (
              <MoviesCard
                key={movie.movieId}
                {...movie}
                loggedIn={loggedIn}
                deleteSavedMovie={deleteSavedMovie}
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
