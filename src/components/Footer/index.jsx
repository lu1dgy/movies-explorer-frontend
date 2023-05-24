import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <h3 className={style.footer__heading}>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className={style.footer__info}>
          <p className={style.footer__year}>&#169; 2023</p>
          <nav className={style.footer__links}>
            <a
              href='https://practicum.yandex.ru/'
              target='_blank'
              rel='noreferrer'
              className={style.footer__link}>
              Яндекс.Практикум
            </a>
            <a
              href='https://github.com/lu1dgy'
              target='_blank'
              rel='noreferrer'
              className={style.footer__link}>
              Github
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
