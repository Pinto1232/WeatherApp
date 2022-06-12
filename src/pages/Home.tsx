import React from 'react'
import globe from '../assets/globe.webp'
import Sun from '../assets/sun.svg'
import UI from '../components/ui/UI'




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
       <div className="mt-10 mx-40 items-center md:w-auto font-medium ">
        <h1 className="text-white text-center mb-5 text-4xl">Chek Out the Weather for today </h1>
        <img className="md:w-full  max-w-xl" src={globe} alt="" />
      </div>

      <div className="bg-transparent px-5 py-5 grow  md:mt-10 flex-initial w-1/3 shadow-2xl  md:w-32xl  ">
         <div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
            <div>
              <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                <svg className="h-6 w-6 gap-8 text-white" xmlns={Sun} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
              </span>
            
              <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                <svg className="h-6 w-6 gap-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
              </span>
            
              <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                <svg className="h-6 w-6 gap-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
              </span>
          </div>
          
            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
            <p className="text-slate-500 indent-4 text-justify dark:text-slate-400 mt-2 text-sm">
              Lorem ipsum dolor sit amet, quo illo voluptatem hic obcaecati nisi qui nam, beatae adipisci delectus quod earum nesciunt cum atque dolor ipsa impedit? Quis incidunt ipsum ad necessitatibus assumenda eveniet error aut at, laudantium alias perferendis vel placeat, perspiciatis eius molestiae, commodi quos iusto optio sint explicabo doloremque totam voluptatum fugiat! Amet possimus, enim quasi dolorem nobis, reiciendis nam perspiciatis quis accusantium earum veniam, non atque fugit aut veritatis reprehenderit tenetur! Necessitatibus distinctio accusantium voluptas ratione quisquam cupiditate, doloribus autem quae eos in? Fugit ex adipisci quaerat veniam!
            </p>

   
          
          <div className="py-8 px-8 max-w-lg mx-auto mt-10 bg-midnight rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={globe} alt="" />
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                  <p className="text-lg text-black font-semibold">
                    Erin Lindford
                  </p>
                  <p className="text-slate-500 font-medium">
                    Product Engineer
                  </p>
                </div>
                <button className="px-4 py-1 bg-white text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
              </div>
          </div>

          <div className="py-8 px-8 max-w-lg mx-auto mt-10 bg-midnight rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={globe} alt="" />
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                  <p className="text-lg text-black font-semibold">
                    Erin Lindford
                  </p>
                  <p className="text-slate-500 font-medium">
                    Product Engineer
                  </p>
                </div>
                <button className="px-4 py-1  bg-white text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
              </div>
          </div>
         </div>
      </div>

      <UI>
        <p className=" flex text-white text-center w-lg bg-metal ">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates harum alias totam repellendus est et consectetur cumque accusantium dolor, doloribus praesentium dolores autem vel sed ex eos molestias. Reprehenderit eligendi, eos ab architecto accusamus quam ullam sint provident laborum a quis explicabo dolorem voluptatibus minus aspernatur officiis deserunt expedita? Asperiores!
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates harum alias totam repellendus est et consectetur cumque accusantium dolor, doloribus praesentium dolores autem vel sed ex eos molestias. Reprehenderit eligendi, eos ab architecto accusamus quam ullam sint provident laborum a quis explicabo dolorem voluptatibus minus aspernatur officiis deserunt expedita? Asperiores!
          </div>
        </p>
      </UI>
    </div>
  )
}

export default Home