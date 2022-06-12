import React from 'react'
import { Link } from 'react-router-dom'


const NavLinks = () => {
    const links = [
        {
            id: 0,
            label: 'Contact',
            to: '/contact'
        },

        {
            id: 1,
            label: 'About Us',
            to: '/about'
        },
        {
            id: 2,
            label: 'Map',
            to: '/map'
        },
        {
            id: 3,
            label: 'Portfolio',
            to: '/portfolio'
        },
    ]
    
  return (
      <>
          {links.map((link) => (
              <div key={link.id}>
                  <div>
                      <Link to={link.to}>
                          {link.label}
                      </Link>
                  </div>
            </div>
        ))}
      </>
  )
}

export default NavLinks