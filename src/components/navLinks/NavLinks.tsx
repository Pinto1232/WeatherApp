import React from 'react'

const NavLinks = () => {
    const links = [
        {
            label: 'Contact',
            to: '/contact'
        },

        {
            label: 'About Us',
            to: '/about'
        },
        {
            label: 'Map',
            to: '/map'
        },
        {
            label: 'Portfolio',
            to: '/portfolio'
        },
        {
            label: 'Sign Up',
            to: '/signup'
        },
    ]
    
  return (
      <>
          {links.map((link) => (
              <div key={link.label}>
                  <div>
                      <h1>{link.label}</h1>
                  </div>
            </div>
        ))}
      </>
  )
}

export default NavLinks