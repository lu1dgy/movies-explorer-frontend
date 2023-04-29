import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.svg'

import style from './Register.module.css'

const Register = () => {
  return (
    <div className={style.register}>
      <div className={style.register__container}>
        <Link to={'/'}>
          <img
            className={style.register__logo}
            src={logo}
            alt='logo'
          />
        </Link>
        <h1 className={style.register__heading}>Добро пожаловать!</h1>
        <form className={style.register__form}>
          <fieldset className={style.register__fieldset}>
            <label className={style.register__label}>
              <span className={style.register__span}>Имя</span>
              <input
                className={style.register__input}
                type='text'
                placeholder='Введите имя'
                required
              />
              <span className={style.register__error}>Что-то пошло не так...</span>
            </label>
            <label className={style.register__label}>
              <span className={style.register__span}>E-mail</span>
              <input
                className={style.register__input}
                placeholder='Введите почту'
                type='email'
                required
              />
              <span className={style.register__error}>Что-то пошло не так...</span>
            </label>
            <label className={style.register__label}>
              <span className={style.register__span}>Пароль</span>
              <input
                className={`${style.register__input} ${style.register__error_active}`}
                placeholder='Введите пароль'
                value={'1234567'}
                onChange={() => {}}
                type='password'
                required
              />
              <span className={`${style.register__error} ${style.register__error_active}`}>Что-то пошло не так...</span>
            </label>
          </fieldset>
          <button
            className={style.register__submit}
            type='submit'>
            Зарегестрироваться
          </button>
          <div className={style.register__enter}>
            <p className={style.register__question}>Уже зарегистрированы?</p>
            <Link
              className={style.register__link}
              to={'/login'}>
              Войти
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
