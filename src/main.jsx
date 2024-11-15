import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import App from './App.jsx'
import Header from './Components/Header.jsx'
import Hero from './Components/Hero.jsx'
import Courses from './Components/Courses.jsx'
import Footer from './Components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Hero />
    <Courses />
    <Footer />
    {/* <App /> */}
  </StrictMode>,
)
