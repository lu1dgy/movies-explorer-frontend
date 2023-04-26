import React from 'react'
import style from './MoviesCardList.module.css'
const MoviesCardList = ({ children }) => {
  return (
    <section className={style.movies}>
      <div className={style.movies__container}>
        <ul className={style.movies__list}>{children}</ul>
        <button className={style.movies__more}>Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList
