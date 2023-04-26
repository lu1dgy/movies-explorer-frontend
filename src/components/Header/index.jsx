import React from 'react'
import { useLocation } from 'react-router-dom'

import logo from '../../images/logo.svg'

import style from './Header.module.css'

const Header = () => {
  const location = useLocation()
  const backgroundColor = location.pathname === '/' ? '' : style.header_white

  return (
    <header className={style.header + ' ' + backgroundColor}>
      <div className={style.header__container}>
        <img
          src={logo}
          alt='logo'
        />
        <div className={style.header__buttons}>
          <button className={style.header__btn}>Регистрация</button>
          <button className={style.header__btn + ' ' + style.header__active}>Войти</button>
        </div>
      </div>
    </header>
  )
}

export default Header
