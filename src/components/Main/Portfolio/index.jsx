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
    <section className={style.portfolio}>
      <div className={style.portfolioContainer}>
        <h2 className={style.heading}>Портфолио</h2>
        <ul className={style.list}>
          {links.map((e, i) => (
            <li
              className={style.item}
              key={i}>
              <a
                className={style.link}
                href={e.href}>
                <span className={style.text}>{e.link}</span>
                <img
                  className={style.arrow}
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
