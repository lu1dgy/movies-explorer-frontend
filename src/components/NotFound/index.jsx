import React from 'react'
import { Link } from 'react-router-dom'
import style from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={style.error}>
      <h1 className={style.error__heading}>404</h1>
      <p className={style.error__text}>Страница не найдена</p>
      <Link
        to={'/'}
        className={style.error__btn}>
        Назад
      </Link>
    </div>
  )
}

export default NotFound
