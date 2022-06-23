import React from 'react'
import { Link } from 'react-router-dom'


const NavLinks = () => {
    const links = [
        {
            id: 0,
            label: 'Guide',
            to: '/guide',
            submenu: true, 
            sublinks: [
                { 
                    Head: 'Topwear',
                    sublink: [
                        {label: 'One', to: '/', id: 0},
                        {label: 'two', to: '/', id: 1},
                        {label: 'three', to: '/', id: 2},
                        {label: 'four', to: '/', id: 3},
                        {label: 'five', to: '/', id: 4},
                    ]
                },
                 { 
                    Head: 'Bottomwear',
                    sublink: [
                        {label: 'One', to: '/', id: 0},
                        {label: 'two', to: '/', id: 1},
                        {label: 'three', to: '/', id: 2},
                        {label: 'four', to: '/', id: 3},
                        {label: 'five', to: '/', id: 4},
                    ]
                },
                { 
                    Head: 'Innerwear',
                    sublink: [
                        {label: 'One', to: '/', id: 0},
                        {label: 'two', to: '/', id: 1},
                        {label: 'three', to: '/', id: 2},
                        {label: 'four', to: '/', id: 3},
                        {label: 'five', to: '/', id: 4},
                    ]
                },
                { 
                    Head: 'Backwear',
                    sublink: [
                        {label: 'One', to: '/', id: 0},
                        {label: 'two', to: '/', id: 1},
                        {label: 'three', to: '/', id: 2},
                        {label: 'four', to: '/', id: 3},
                        {label: 'five', to: '/', id: 4},
                    ]
                },
                 { 
                    Head: 'Footwear',
                    sublink: [
                        {label: 'One', to: '/', id: 0},
                        {label: 'two', to: '/', id: 1},
                        {label: 'three', to: '/', id: 2},
                        {label: 'four', to: '/', id: 3},
                        {label: 'five', to: '/', id: 4},
                    ]
                }
            ]
        },

        {
            id: 1,
            label: 'Marketplace',
            to: '/marketplace',
            submenu: true, 
            sublinks: [
                { 
                    Head: 'Topwear',
                    sublink: [
                        {label: 'One', to: '/', id: 0},
                        {label: 'two', to: '/', id: 1},
                        {label: 'three', to: '/', id: 2},
                        {label: 'four', to: '/', id: 3},
                        {label: 'five', to: '/', id: 4},
                    ]
                },
                { 
                    Head: 'Menwear',
                    sublink: [
                        {label: 'One', to: '/', id: 0},
                        {label: 'two', to: '/', id: 1},
                        {label: 'three', to: '/', id: 2},
                        {label: 'four', to: '/', id: 3},
                        {label: 'five', to: '/', id: 4},
                    ]
                },
            ]
        },
        {
            id: 2,
            label: 'Maps',
            to: '/map'
        },
            {
            id: 2,
            label: 'Pricing',
            to: '/pricing'
        },
    ]
    
  return (
      <>
          {links.map((link) => (
              <div key={link.id} className=" z-50 ">
                  <div className="px-3 p-5 text-left md:cursor-pointer group ">
                      <Link to={link.to} className="py-7  md:text-white">
                          {link.label}
                      </Link>

                      {link.submenu && (
                       <div>
                              <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                                  <div className="py-3">
                                      <div className="w-4 h-4 left-3 absolute mt-1 bg-menu-bg-color 
                                      rotate-45"></div>
                                  </div>
                            <div className="bg-menu-bg-color p-5 grid grid-cols-3 gap-10">
                                {
                                  link.sublinks.map((newsublinks) => (
                                      <div  key={newsublinks.Head}>
                                        <div>
                                          <h1 className="text-lg font-semibold">{newsublinks.Head}</h1>
                                          
                                          {newsublinks.sublink.map((slink) => (
                                                   <div className="text-sm text-gray-600 my-2.5" key={slink.id}>
                                                     <Link className="hover:text-midnight" to={slink.to}>
                                                      {slink.label}
                                                    </Link>
                                                   </div>
                                                ))}
                                          </div>
                                         </div>
                                   ))}   
                            </div>
                         </div>
                      </div> 
                      )}
                  </div>
                  {/* Mobile dropdown */}
                  <div>
                     
                  </div>
            </div>
        ))}
      </>
  )
}

export default NavLinks