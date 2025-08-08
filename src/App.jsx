import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Skills from './components/pages/Skills'
import Contact from './components/pages/Contact'
import Portfolio from './components/pages/Portfolio'
import Main from './components/Main'
function App() {


  return (
    <>
    <div className='App'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
