import React from 'react'
import style from './Techs.module.css'
const Techs = () => {
  const technologies = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']
  return (
    <section className={style.techs}>
      <div className={style.techs__container}>
        <h2 className={style.techs__heading}>Технологии</h2>
        <div className={style.techs__info}>
          <h3 className={style.techs__subheading}>7 технологий</h3>
          <p className={style.techs__text}>
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
          <ul className={style.techs__list}>
            {technologies.map((e, i) => (
              <li
                key={i}
                className={style.techs__item}>
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Techs
