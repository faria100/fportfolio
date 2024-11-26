import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Skills from './component/Skills'
import Work from './component/Work'
import Contact from './component/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App