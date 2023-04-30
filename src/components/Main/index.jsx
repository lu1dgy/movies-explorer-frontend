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
