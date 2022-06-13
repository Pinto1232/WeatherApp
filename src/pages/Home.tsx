import React from 'react'
import globe from '../assets/globe.webp'
import { motion } from "framer-motion"
import Table from '../components/tables/Table'
import HomeWidget from '../components/widgets/HomeWidget'





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

    
      <div className=" flex text-white mt-20 text-center w-lg flex-wrap">
          <div className="text-black-text flex-1 w-64 w-full  ">
              <div className="p-6 mx-auto bg-transparent rounded-xl shadow-lg flex items-center space-x-4">
                <Table />
              </div>
          </div>

          <div className="basis-1/2 p-6 mx-auto text-center items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates harum alias totam repellendus est et consectetur cumque accusantium dolor, doloribus praesentium dolores autem vel sed ex eos molestias. Reprehenderit eligendi, eos ab architecto accusamus quam ullam sint provident laborum a quis explicabo dolorem voluptatibus minus aspernatur officiis deserunt expedita? Asperiores!
          </div>
      </div>
    </div>
  )
}

export default Home