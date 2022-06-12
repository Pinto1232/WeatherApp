import React from 'react'
import logo from '../assets/logo.png'



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
    <div className="flex mt-10 mx-40 md:w-auto font-medium justify-around gap-2">
      <div className="bg-transparent basis-1/2">
        <h2>Home</h2>
        <img src={logo} alt="" />
      </div>

      <div className="bg-white flex-initial w-1/3 ">
        <h2>Home</h2>
      </div>
    </div>
  )
}

export default Home