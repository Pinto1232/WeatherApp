import React from 'react'
import globe from '../assets/globe.webp'
import { motion } from "framer-motion"
import Table from '../components/tables/Table'
import HomeWidget from '../components/widgets/HomeWidget'
import { GridWidget } from '../components/widgets/gridwidget/GridWidget'





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
    <div className="flex flex-wrap md:mt-10 mx-40 md:w-auto font-medium justify-around gap-2">
       <div className="mt-10 mx-40 -z-50  items-center md:w-auto font-medium ">
        <h1 className="text-white text-center mb-5 text-4xl uppercase">Chek Out the Weather for today </h1>
        <motion.img className="md:w-full min-w-full max-w-xl" src={globe} alt=""
         animate={{ rotate: 360, y: [0, 50, 0]  }}
          transition={{
            flip: Infinity,
            ease: "easeOut", duration: 50,
              transitionEnd: {
              display: "none",
            },
          }}
        />
      </div>

      <div className="bg-transparent px-5 py-5 grow  md:mt-10 flex-initial w-1/3 shadow-2xl  md:w-32xl  ">
        <HomeWidget />
      </div>



      <div className=" m-0  flex mt-10 m-1 px-5 py-10  w-2xl  h-auto  "> 
        <div>
          <p className="text-white  text-4xl uppercase mb-5">Last weather update</p>
            <GridWidget />
          </div>
      </div>
    </div>
  )
}

export default Home