import React from 'react'
import Header from '../Header'
import style from './Profile.module.css'

const Profile = () => {
  return (
    <>
      <Header />
      <div className={style.profile}>
        <div className={style.profile__container}>
          <h1 className={style.profile__heading}>Привет, Александр!</h1>
          <form className={style.profile__form}></form>
        </div>
      </div>
    </>
  )
}

export default Profile
