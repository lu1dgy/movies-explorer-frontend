import React from 'react'
import { useLocation } from 'react-router-dom'
import style from './MoviesCardList.module.css'
const MoviesCardList = ({ children }) => {
  const location = useLocation()

  const hideButton = location.pathname === '/saved-movies' ? style.movies__more_hide : ''

  return (
    <section className={style.movies}>
      <div className={style.movies__container}>
        <ul className={style.movies__list}>{children}</ul>
        <button className={style.movies__more + ' ' + hideButton}>Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList
