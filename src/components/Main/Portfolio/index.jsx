import React from 'react'
import style from './Portfolio.module.css'
import arrow from '../../../images/arrow.svg'

const Portfolio = () => {
  const links = [
    { link: 'Статичный сайт', href: '#' },
    { link: 'Адаптивный сайт', href: '#' },
    { link: 'Одностраничное приложение', href: '#' },
  ]

  return (
    <section
      className={style.portfolio}
      id='portfolio'>
      <div className={style.portfolio__container}>
        <h2 className={style.portfolio__heading}>Портфолио</h2>
        <ul className={style.portfolio__list}>
          {links.map((e, i) => (
            <li
              className={style.portfolio__item}
              key={i}>
              <a
                className={style.portfolio__link}
                href={e.href}>
                <span className={style.portfolio__text}>{e.link}</span>
                <img
                  className={style.portfolio__arrow}
                  src={arrow}
                  alt='arrow'
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Portfolio
