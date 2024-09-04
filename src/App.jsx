import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import About from './About'
import Schedule from './Schedule'
import Footer from './Footer'
import Speaker from './Speakers'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <About/>
    <Schedule/>
    <Speaker/>
    <Footer/>
    <Analytics />
    </>
  )
}

export default App
