import React from 'react'
import style from './Promo.module.css'
import img from '../../../images/web.svg'

const Promo = () => {
  return (
    <section className={style.promo}>
      <div className={style.promoContainer}>
        <div className={style.textContainer}>
          <h1 className={style.heading}>Учебный проект студента факультета Веб-разработки.</h1>
          <p className={style.text}>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button className={style.btn}>Узнать больше</button>
        </div>
        <img
          className={style.img}
          src={img}
          alt=''
        />
      </div>
    </section>
  )
}

export default Promo
