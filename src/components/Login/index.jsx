import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.svg'

import style from './Login.module.css'

const Login = () => {
  return (
    <main className={style.login}>
      <div className={style.login__container}>
        <Link to={'/'}>
          <img
            className={style.login__logo}
            src={logo}
            alt='logo'
          />
        </Link>
        <h1 className={style.login__heading}>Рады видеть!</h1>
        <form className={style.login__form}>
          <fieldset className={style.login__fieldset}>
            <label className={style.login__label}>
              <span className={style.login__span}>E-mail</span>
              <input
                className={style.login__input}
                placeholder='Введите почту'
                type='email'
                required
              />
              <span className={style.login__error}>Что-то пошло не так...</span>
            </label>
            <label className={style.login__label}>
              <span className={style.login__span}>Пароль</span>
              <input
                className={`${style.login__input}`}
                placeholder='Введите пароль'
                type='password'
                required
              />
              <span className={`${style.login__error}`}>Что-то пошло не так...</span>
            </label>
          </fieldset>
          <button
            className={style.login__submit}
            type='submit'>
            Войти
          </button>
          <div className={style.login__enter}>
            <p className={style.login__question}>Ещё не зарегистрированы?</p>
            <Link
              className={style.login__link}
              to={'/register'}>
              Регистрация
            </Link>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login
