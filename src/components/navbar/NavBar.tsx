import React from 'react'
import { Link } from 'react-router-dom'
import NavLinks from '../navLinks/NavLinks'
import logo from './../../assets/logo.png'

const navBar = () => {
  return (
      <nav className='bg-white'>
          <div className='flex items-center font-medium justify-around'>
              <div>
                  <img src={logo} alt="log" className="md:cursor-pointer h-20" />
              </div>

              <ul className="flex uppercase gap-8 md:cursor-pointer">
                  <li>
                      <Link to="/" className=" px-3 inline-block">
                         Home
                      </Link>
                  </li>
                  <NavLinks/>
              </ul>

          </div>
      </nav>
  )
}

export default navBar