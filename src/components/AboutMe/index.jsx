import React from 'react'
import style from './AboutMe.module.css'
import avatar from '../../images/me.jpg'

const AboutMe = () => {
  return (
    <section className={style.about}>
      <div className={style.about__container}>
        <h2 className={style.about__heading}>Студент</h2>
        <div className={style.about__portfolio}>
          <div className={style.about__information}>
            <h3 className={style.about__name}>Александр</h3>
            <p className={style.about__profession}>Фронтенд-разработчик, 23 лет</p>
            <p className={style.about__text}>
              Я родился и вырос в Самаре, и с самого детства увлекаюсь технологиями. В мире веб-разработки я чувствую
              себя как рыба в воде, и мой стек технологий включает ReactJS, TypeScript, Redux, Express и MongoDB.
            </p>
            <a
              className={style.about__link}
              target='_blank'
              rel='noreferrer'
              href='https://github.com/lu1dgy'>
              Github
            </a>
          </div>
          <img
            className={style.about__avatar}
            src={avatar}
            alt='avatar'
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
