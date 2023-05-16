import React, { useMemo } from 'react';
import { useState } from 'react';
import style from './MoviesCard.module.css';

const MoviesCard = (props) => {
  const [liked, setLiked] = useState(props.isLiked);
  const handleCountTime = (data) => {
    const time = {
      hour: `${Math.floor(data / 60) ? Math.floor(data / 60) + ' ч.' : ''}`,
      minutes: `${data % 60 ? (data % 60) + ' мин.' : ''}`,
    };
    return time;
  };

  const handleLike = async () => {
    try {
      if (props.isLiked) {
        await props.deleteSavedMovie(props._id);
        setLiked(false);
      } else {
        await props.addSavedMovie({
          nameEN: props?.nameEN,
          nameRU: props?.nameRU,
          country: props?.country,
          duration: props?.duration,
          year: props?.year,
          image: props?.image,
          trailerLink: props?.trailerLink,
          description: props?.description,
          director: props?.director,
          thumbnail: props?.thumbnail,
          movieId: props?.movieId,
        });
        setLiked(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const memoTime = useMemo(() => handleCountTime(props.duration), [props.duration]);

  return (
    <li className={style.movie}>
      <a href={props?.trailerLink}>
        <img className={style.movie__img} src={props.image} alt='movieImg' />
      </a>
      <div className={style.movie__hood}>
        <p className={style.movie__name}>{props.nameEN}</p>
        <button
          className={`${style.movie__like} ${liked ? style.movie__like_active : ''}`}
          onClick={handleLike}
        />
      </div>
      <p className={style.movie__duration}>
        {memoTime.hour} {memoTime.minutes}
      </p>
    </li>
  );
};

export default MoviesCard;
