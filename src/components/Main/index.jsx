import React from 'react'
import AboutMe from '../AboutMe'
import AboutProject from '../AboutProject'
import Portfolio from '../Portfolio'
import Promo from '../Promo'
import Techs from '../Techs'
import style from './Main.module.css'

const Main = () => {
  return (
    <div className={style.main}>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </div>
  )
}

export default Main
