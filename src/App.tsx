import React from 'react'
import Layout from './components/layout/Layout'
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

function App(props: any) {


  return (
    <>
      <Layout>
         <Roteator/>
     </Layout>
    </>
  )
}

export default App
