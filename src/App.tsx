import React from 'react'
import Roteator from './roteator/Roteator'



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
    <>
      <Roteator/>
    </>
  )
}

export default App
