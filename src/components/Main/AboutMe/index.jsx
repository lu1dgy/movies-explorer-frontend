import React from 'react'
import style from './AboutMe.module.css'
import avatar from '../../../images/me.jpg'

const AboutMe = () => {
  return (
    <section className={style.about}>
      <div className={style.aboutContainer}>
        <h2 className={style.heading}>Студент</h2>
        <div className={style.portfolio}>
          <div className={style.information}>
            <h3 className={style.name}>Александр</h3>
            <p className={style.profession}>Фронтенд-разработчик, 30 лет</p>
            <p className={style.text}>
              Я родился и вырос в Самаре, и с самого детства увлекаюсь технологиями. В мире веб-разработки я чувствую
              себя как рыба в воде, и мой стек технологий включает ReactJS, TypeScript, Redux, Express и MongoDB.
            </p>
            <a
              className={style.link}
              href='https://github.com/lu1dgy'>
              Github
            </a>
          </div>
          <img
            className={style.avatar}
            src={avatar}
            alt='avatar'
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
