import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/Home'
import Sociallinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'


function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      
      <Sociallinks/>
    </div>
  )
}

export default App
