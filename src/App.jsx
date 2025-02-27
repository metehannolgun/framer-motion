import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import HowItHelps from './components/HowItHelps/HowItHelps.jsx'
import Uses from './components/Uses/Uses.jsx'
import Trust from './components/Trust/Trust.jsx'
import Footer from './components/Footer/Footer.jsx'
const App = () => {
  return (
      <main className=''>
        <Navbar />
        <Hero />
        <HowItHelps />
        <Uses />
        <Trust />
        <Footer />
      </main>

  )
}

export default App