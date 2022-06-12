import React from 'react'
import { Routes, Route} from 'react-router-dom'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Home from '../pages/Home'
import Login from '../pages/login/Login'
import Map from '../pages/map/Map'
import { Portfolio } from '../pages/portfolio/Portfolio'
import SignUp from '../pages/signup/SignUp'


const Roteator = () => {
  return (
      <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/contact" element={<Contact />}></Route>
           <Route path="/about" element={<About />}></Route>
           <Route path="/map" element={<Map />}></Route>
           <Route path="/portfolio" element={<Portfolio />}></Route>
           <Route path="/signup" element={<SignUp />}></Route>
           <Route path="/login" element={<Login />}></Route>
      </Routes>
  )
}

export default Roteator