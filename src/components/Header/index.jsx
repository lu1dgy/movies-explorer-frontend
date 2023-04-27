import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../../images/logo.svg'
import account from '../../images/profile.svg'

import style from './Header.module.css'

const Header = () => {
  const location = useLocation()

  const backgroundColor = location.pathname === '/' ? '' : style.header_white
  const isMainPage = location.pathname === '/'

  return (
    <header className={`${style.header} ${backgroundColor}`}>
      <div className={style.header__container}>
        <Link to={'/'}>
          <img
            src={logo}
            alt='logo'
          />
        </Link>
        {isMainPage ? (
          <div className={style.header__buttons}>
            <button className={style.header__btn}>Регистрация</button>
            <button className={style.header__btn + ' ' + style.header__active}>Войти</button>
          </div>
        ) : (
          <>
            <nav className={style.header__menu}>
              <ul className={style.header__list}>
                <li className={style.header__item}>
                  <Link
                    to={'/movies'}
                    className={style.header__link}>
                    Фильмы
                  </Link>
                </li>
                <li className={style.header__item}>
                  <Link
                    className={style.header__link}
                    to={'/saved-movies'}>
                    Сохранённые фильмы
                  </Link>
                </li>
                <li className={style.header__item}>
                  <Link
                    className={style.header__link}
                    to='/profile'>
                    <img
                      className={style.header__account}
                      src={account}
                      alt={'profile'}
                    />
                  </Link>
                </li>
              </ul>
            </nav>
            <button className={style.header__burger}>
              <div className={style.header__line}></div>
              <div className={style.header__line}></div>
              <div className={style.header__line}></div>
            </button>
          </>
        )}
      </div>
    </header>
  )
}

export default Header
