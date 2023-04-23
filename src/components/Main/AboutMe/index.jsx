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
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать
              музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После
              того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
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
