import React from 'react'
import './App.css'
import Nav from './components/Nav'  
import Info from './components/Info'
import Aboutus from './components/Aboutus'
import Services from './components/Services'
import Departments from './components/Departments'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
   <>
   <Nav/>
   <Info /> 
   <Aboutus/>
   <Services/>
   <Departments/>
   <Contact/>
   <Footer/>
   </>
  )
}

export default App

