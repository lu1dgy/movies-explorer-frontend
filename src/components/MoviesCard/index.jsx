import React, { useMemo } from 'react';
import style from './MoviesCard.module.css';

const MoviesCard = ({ isLiked, image, duration }) => {
  const handleCountTime = (data) => {
    const time = {
      hour: `${Math.floor(data / 60) ? Math.floor(data / 60) + ' ч.' : ''}`,
      minutes: `${data % 60 ? (data % 60) + ' мин.' : ''}`,
    };
    return time;
  };

  const memoTime = useMemo(() => handleCountTime(duration), [duration]);

  return (
    <li className={style.movie}>
      <img className={style.movie__img} src={image} alt='movieImg' />
      <div className={style.movie__hood}>
        <p className={style.movie__name}>33 слова о дизайне</p>
        <button className={`${style.movie__like} ${isLiked ? style.movie__like_active : ''}`} />
      </div>
      <p className={style.movie__duration}>
        {memoTime.hour} {memoTime.minutes}
      </p>
    </li>
  );
};

export default MoviesCard;
