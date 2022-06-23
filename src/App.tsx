import React from 'react'
import Layout from './components/layout/Layout'
import Roteator from './roteator/Roteator'
import './App.css';


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
