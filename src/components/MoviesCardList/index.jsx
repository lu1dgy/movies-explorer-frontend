import React from 'react';
import { useLocation } from 'react-router-dom';
import style from './MoviesCardList.module.css';
const MoviesCardList = ({
  children,
  onPagintaionClick,
  isMoviesLeft,
  isSearchError,
  searchError,
}) => {
  const onPagination = () => {
    onPagintaionClick();
  };
  return (
    <section className={style.movies}>
      <div className={style.movies__container}>
        {isSearchError ? (
          <span className={style.movies__error}>{searchError}</span>
        ) : (
          <ul className={style.movies__list}>{children}</ul>
        )}
        {isMoviesLeft && !isSearchError ? (
          <button className={style.movies__more} onClick={onPagination}>
            Ещё
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default MoviesCardList;
