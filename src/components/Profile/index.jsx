import React from 'react'
import Header from '../Header'
import style from './Profile.module.css'

const Profile = () => {
  return (
    <>
      <Header />
      <main className={style.profile}>
        <div className={style.profile__container}>
          <h1 className={style.profile__heading}>Привет, Александр!</h1>
          <form className={style.profile__form}>
            <fieldset className={style.profile__fieldset}>
              <label className={style.profile__label}>
                <span className={style.profile__name}>Имя</span>
                <input
                  className={style.profile__input}
                  type='text'
                  placeholder='Александр'
                  required
                />
              </label>
              <div className={style.profile__line}></div>
              <label className={style.profile__label}>
                <span className={style.profile__email}>E-mail</span>
                <input
                  className={style.profile__input}
                  placeholder='aaa@gmail.com'
                  type='email'
                  required
                />
              </label>
            </fieldset>
            <div className={style.profile__buttons}>
              <button
                className={style.profile__edit}
                type='submit'>
                Редактировать
              </button>
              <button className={style.profile__exit}>Выйти из аккаунта</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default Profile
