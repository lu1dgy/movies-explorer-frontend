import React from 'react'
import style from './AboutProject.module.css'

const AboutProject = () => {
  return (
    <section className={style.about}>
      <div className={style.aboutContainer}>
        <h2 className={style.heading}>О проекте</h2>
        <div className={style.articleContainer}>
          <article className={style.article}>
            <h3 className={style.subheading}>Дипломный проект включал 5 этапов</h3>
            <p className={style.text}>
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </article>
          <article className={style.article}>
            <h3 className={style.subheading}>На выполнение диплома ушло 5 недель</h3>
            <p className={style.text}>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </article>
        </div>
        <div className={style.bar}>
          <div className={style.barContainer}>
            <span className={style.blackBar}>1 неделя</span>
            <p className={style.barText}>Back-end</p>
          </div>
          <div className={style.barContainer}>
            <span className={style.greyBar}>4 недели</span>
            <p className={style.barText}>Front-end</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutProject
