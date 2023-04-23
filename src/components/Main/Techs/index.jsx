import React from 'react'
import style from './Techs.module.css'
const Techs = () => {
  const technologies = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']
  return (
    <section className={style.techs}>
      <div className={style.techsContainer}>
        <h2 className={style.heading}>Технологии</h2>
        <div className={style.info}>
          <h3 className={style.subheading}>7 технологий</h3>
          <p className={style.text}>
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
          <ul className={style.list}>
            {technologies.map((e, i) => (
              <li
                key={i}
                className={style.item}>
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
