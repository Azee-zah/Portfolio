import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


function App() {
  

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
   
  )
}

export default App
