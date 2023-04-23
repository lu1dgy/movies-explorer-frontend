import React from 'react'
import style from './Header.module.css'
import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <img
          src={logo}
          alt='logo'
        />
        <div className={style.buttons}>
          <button className={style.btn}>Регистрация</button>
          <button className={style.btn + ' ' + style.active}>Войти</button>
        </div>
      </div>
    </header>
  )
}

export default Header
