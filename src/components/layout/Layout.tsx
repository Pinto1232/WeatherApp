import React, { ReactNode } from 'react'
import NavBar from '../navbar/NavBar'


interface Props {
    children?: ReactNode
}

const Layout = ({ children, ...props }: Props) => {
  return (
      <div>
          <NavBar/>
          <div {...props}>
              {children}
          </div>
    </div>
  )
}

export default Layout