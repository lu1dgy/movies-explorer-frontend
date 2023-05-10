import React from 'react'
import AboutMe from '../../components/AboutMe'
import AboutProject from '../../components/AboutProject'
import Portfolio from '../../components/Portfolio'
import Promo from '../../components/Promo'
import Techs from '../../components/Techs'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default Main
