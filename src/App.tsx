import React from 'react'
import './App.css'


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
    <div>
      <h2>Weather App</h2>
    </div>
  )
}

export default App
