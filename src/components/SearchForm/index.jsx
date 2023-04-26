import React from 'react'
import style from './SearchForm.module.css'

const SearchForm = () => {
  return (
    <form
      required
      className={style.form}>
      <div className={style.form__container}>
        <fieldset className={style.form__fieldset}>
          <input
            type='text'
            placeholder='Фильм'
            className={style.form__input}
          />
          <button
            className={style.form__submit}
            type='submit'>
            Найти
          </button>
        </fieldset>
        <div className={style.form__checkblock}>
          <input
            id='short-movies'
            type='checkbox'
            className={style.form__checkbox}
          />
          <label className={style.form__label}>Короткометражки</label>
        </div>
      </div>
    </form>
  )
}

export default SearchForm
