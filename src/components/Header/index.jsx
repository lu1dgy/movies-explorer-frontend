import React from 'react'
import style from './Header.module.css'
import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <header className={style.header}>
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
