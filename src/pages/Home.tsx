import React from 'react'
import NavBar from './../components/navbar/NavBar'


declare global
{
  namespace JSX
  { 
    interface IntrinsicElements
    {
      div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
      h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    }
  }
}

const Home = () => {
  return (
    <div>
      <h2 className="text-white">Home</h2>
    </div>
  )
}

export default Home