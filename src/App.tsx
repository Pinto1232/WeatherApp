import React from 'react'



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

function App() {


  return (
    <div className='bg-blue-600 text-white text-7xl'>
      <h1>Weather App</h1>
    </div>
  )
}

export default App
