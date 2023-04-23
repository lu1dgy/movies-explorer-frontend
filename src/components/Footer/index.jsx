import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <h3 className={style.heading}>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className={style.info}>
          <p className={style.year}>&#169; 2023</p>
          <nav className={style.links}>
            <a
              href='https://practicum.yandex.ru/'
              className={style.link}>
              Яндекс.Практикум
            </a>
            <a
              href='https://github.com/lu1dgy'
              className={style.link}>
              Github
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
