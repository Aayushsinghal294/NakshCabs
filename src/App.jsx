import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Rides from './pages/Rides'
import Packages from './pages/Packages'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Footer from './components/Footer'
import Whatsapp from './components/Whatsapp'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <div className='App relative overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rides' element={<Rides />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Whatsapp />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App