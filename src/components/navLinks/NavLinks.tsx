import React from 'react'

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
        {
            id: 4,
            label: 'Sign Up',
            to: '/signup'
        },
    ]
    
  return (
      <>
          {links.map((link) => (
              <div key={link.id}>
                  <div>
                      <h1>{link.label}</h1>
                  </div>
            </div>
        ))}
      </>
  )
}

export default NavLinks