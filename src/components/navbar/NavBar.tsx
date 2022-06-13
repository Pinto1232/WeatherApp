import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import BtnSignUp from '../button/BtnSignUp'
import NavLinks from '../navLinks/NavLinks'
import logo from './../../assets/logo.png'
import { IoMdMenu } from "react-icons/io"; 
import SearchBar from '../search/SearchBar'



const navBar = (props: any) => {
    const [open, setOpen] = useState(false)

  return (
      <nav className=' sticky top-0 bg-black-text '>
          <div className='flex items-center font-medium justify-around '>
              <div className='z-50 p-5 md:w-auto w-full flex justify-between'>
                  <Link to='/'>
                      <img src={logo} alt="logo" className="md:cursor-pointer h-20" />
                  </Link>
                   <div className="text-3xl md:hidden text-white"  onClick={() => setOpen(!open)}>
                      {/* <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>  */}
                     <IoMdMenu  name={`${open ? 'close' : 'menu'}`} ></IoMdMenu> 
                    </div>
              </div>

              <ul className="md:flex hidden text-white uppercase items-center gap-8 md:cursor-pointer">
                  <li>
                      <Link to="/" className=" py-5 px-3 inline-block">
                         Home
                      </Link>
                  </li>
                  <NavLinks />
                  <SearchBar />
              </ul>
              

              <div className="md:block hidden">
                 <BtnSignUp/> 
              </div>
            
              {/* Mobile navbar*/}
              <ul className={`md:hidden bg-menu-bg-color text-white  absolute w-full h-full bottom-0 py-24 pl-4
                duration-500 easy-in ${open ? 'left-0' : 'left-[-100%]'}
              `}>
                  <li>
                    <Link to="/" className=" py-7 px-3 inline-block">
                         Home
                     </Link>
                  </li>
                    <NavLinks />
                 <li className="py-5">
                    <BtnSignUp/> 
                 </li>
              </ul> 
        

          </div>
      </nav>
  )
}

export default navBar