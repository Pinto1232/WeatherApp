import React from 'react'
import NavBar from './../components/navbar/NavBar'


declare global
{
  namespace JSX
  { 
    interface IntrinsicElements
    {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    }
  }
}

const Home = () => {
  return (
    <div>
       <NavBar/>
    </div>
  )
}

export default Home