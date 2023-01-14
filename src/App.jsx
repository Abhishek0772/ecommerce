import React from 'react'
import Card from './camponets/Card'
import ImageSlider from './camponets/ImageSlider'
import Navbar from './camponets/Navbar'
import './App.css'
import Contact from './camponets/Contact'
import Fetured from './camponets/Fetured'
function App() {
  return (
    <>
    <ImageSlider/>
    <Navbar/>
    <Fetured/>
    <Contact/>
    </>
  )
}

export default App