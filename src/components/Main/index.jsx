import React from 'react'
import AboutMe from '../AboutMe'
import AboutProject from '../AboutProject'
import Portfolio from '../Portfolio'
import Promo from '../Promo'
import Techs from '../Techs'
import Header from '../Header'
import Footer from '../Footer'

const Main = () => {
  return (
    <>
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  )
}

export default Main
