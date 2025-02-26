import React from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import HowItHelps from './components/HowItHelps/HowItHelps.jsx'
const App = () => {
  return (
      <main className=''>
        <Navbar />
        <Hero />
        <HowItHelps />
      </main>

  )
}

export default App