import React from 'react'
import style from './AboutProject.module.css'

const AboutProject = () => {
  return (
    <section className={style.aboutme}>
      <div className={style.aboutme__container}>
        <h2 className={style.aboutme__heading}>О проекте</h2>
        <div className={style.aboutme__articleContainer}>
          <article className={style.aboutme__article}>
            <h3 className={style.aboutme__subheading}>Дипломный проект включал 5 этапов</h3>
            <p className={style.aboutme__text}>
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </article>
          <article className={style.aboutme__article}>
            <h3 className={style.aboutme__subheading}>На выполнение диплома ушло 5 недель</h3>
            <p className={style.aboutme__text}>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </article>
        </div>
        <div className={style.aboutme__bar}>
          <div className={style.aboutme__barContainer}>
            <span className={style.aboutme__blackBar}>1 неделя</span>
            <p className={style.aboutme__barText}>Back-end</p>
          </div>
          <div className={style.aboutme__barContainer}>
            <span className={style.aboutme__greyBar}>4 недели</span>
            <p className={style.aboutme__barText}>Front-end</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutProject
