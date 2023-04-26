import React from 'react'
import MoviesCard from '../MoviesCard'
import style from './MoviesCardList.module.css'
const MoviesCardList = () => {
  const components = Array(15).fill(null)
  return (
    <section className={style.movies}>
      <div className={style.movies__container}>
        <ul className={style.movies__list}>
          <MoviesCard isLiked={true} />
          {components.map((e, i) => (
            <MoviesCard key={i} />
          ))}
        </ul>
        <button className={style.movies__more}>Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList
