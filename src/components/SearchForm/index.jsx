import React from 'react';
import style from './SearchForm.module.css';

const SearchForm = ({
  handleInputChange,
  handleFormSubmit,
  handleCheck,
  isDisabled,
  errorMessage,
  searchValue,
  checkBoxStatus,
}) => {
  return (
    <form required className={style.form} onSubmit={handleFormSubmit}>
      <div className={style.form__container}>
        <span className={style.form__validation}>{errorMessage}</span>
        <fieldset className={style.form__fieldset}>
          <input
            type='text'
            placeholder='Фильм'
            className={style.form__input}
            value={searchValue}
            onChange={handleInputChange}
          />
          <button className={style.form__submit} type='submit' disabled={isDisabled}>
            Найти
          </button>
        </fieldset>
        <div className={style.form__checkblock}>
          <input
            id='short-movies'
            type='checkbox'
            className={style.form__checkbox}
            checked={checkBoxStatus}
            onChange={handleCheck}
            disabled={isDisabled}
          />
          <label className={style.form__label}>Короткометражки</label>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
