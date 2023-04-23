import React from 'react'
import style from './Promo.module.css'
import img from '../../../images/web.svg'

const Promo = () => {
  return (
    <section className={style.promo}>
      <div className={style.promo__container}>
        <div className={style.promo__textContainer}>
          <h1 className={style.promo__heading}>Учебный проект студента факультета Веб-разработки.</h1>
          <p className={style.promo__text}>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a
            href='#portfolio'
            className={style.promo__btn}>
            Узнать больше
          </a>
        </div>
        <img
          className={style.promo__img}
          src={img}
          alt=''
        />
      </div>
    </section>
  )
}

export default Promo
