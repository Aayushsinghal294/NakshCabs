import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './pages/About'
import Rides from './pages/Rides'
import Packages from './pages/Packages'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Whatsapp from './components/Whatsapp/Whatsapp'

const App = () => {


  return (
    <div className='App'>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/rides' element={<Rides/>}/>
       <Route path='/packages' element={<Packages/>}/>
       <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Whatsapp/>
      <Footer/>
    </div>
  )
}

export default App
