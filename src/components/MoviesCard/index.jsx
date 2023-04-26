import React from 'react'
import style from './MoviesCard.module.css'
import image from '../../images/exmapleImg.png'

const MoviesCard = ({ isLiked }) => {
  return (
    <li className={style.movie}>
      <img
        className={style.movie__img}
        src={image}
        alt='movieImg'
      />
      <div className={style.movie__hood}>
        <p className={style.movie__name}>33 слова о дизайне</p>
        <button className={`${style.movie__like} ${isLiked ? style.movie__like_active : ''}`} />
      </div>
      <p className={style.movie__duration}>1ч 42м</p>
    </li>
  )
}

export default MoviesCard
