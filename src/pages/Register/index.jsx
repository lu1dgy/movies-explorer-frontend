import React from 'react';
import { Link } from 'react-router-dom';
import { useValidationForm } from '../../utils/hooks/useValidationForm';

import logo from '../../images/logo.svg';

import style from './Register.module.css';

const Register = ({ handleRegister }) => {
  const { values, handleChange, errors, isValid } = useValidationForm();

  const submitForm = (e) => {
    e.preventDefault();
    handleRegister(values.name, values.email, values.password);
  };

  return (
    <main className={style.register}>
      <div className={style.register__container}>
        <Link to={'/'}>
          <img className={style.register__logo} src={logo} alt='logo' />
        </Link>
        <h1 className={style.register__heading}>Добро пожаловать!</h1>
        <form className={style.register__form} onSubmit={submitForm}>
          <fieldset className={style.register__fieldset}>
            <label className={style.register__label}>
              <span className={style.register__span}>Имя</span>
              <input
                className={`${style.register__input} ${
                  errors.name?.length > 0 ? style.register__input_error : ''
                }`}
                type='text'
                name='name'
                placeholder='Введите имя'
                minLength={2}
                maxLength={30}
                value={values.name || ''}
                onChange={handleChange}
                required
              />
              <span className={style.register__error}>{errors.name || ''}</span>
            </label>
            <label className={style.register__label}>
              <span className={style.register__span}>E-mail</span>
              <input
                className={`${style.register__input} ${
                  errors.email?.length > 0 ? style.register__input_error : ''
                }`}
                placeholder='Введите почту'
                onChange={handleChange}
                value={values.email || ''}
                name='email'
                type='email'
                required
              />
              <span className={style.register__error}>{errors.email || ''}</span>
            </label>
            <label className={style.register__label}>
              <span className={style.register__span}>Пароль</span>
              <input
                className={`${style.register__input} ${
                  errors.password?.length > 0 ? style.register__input_error : ''
                }`}
                placeholder='Введите пароль'
                name='password'
                type='password'
                onChange={handleChange}
                minLength={2}
                maxLength={30}
                value={values.password || ''}
                required
              />
              <span className={style.register__error}>{errors.password || ''}</span>
            </label>
          </fieldset>
          <button className={style.register__submit} type='submit' disabled={!isValid}>
            Зарегестрироваться
          </button>
          <div className={style.register__enter}>
            <p className={style.register__question}>Уже зарегистрированы?</p>
            <Link className={style.register__link} to={'/login'}>
              Войти
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
