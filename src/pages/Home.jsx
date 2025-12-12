import React from 'react'

import About from '../components/About'
import Skills from '../components/Skills'
import Hero from '../components/Hero'
import Work from '../components/Work'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div >
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
    </div>
  )
}

export default Home