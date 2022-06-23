import React from 'react'
import Sun from './../../assets/sun.svg'

const BoxCard = () => {
return (
<div>
    <div className="flex min-w-min items-center  justify-center ">
            <div className="max-w-sm rounded-md bg-white flex-wrap shadow-lg">
                <div className="p-3">
                    <img className="w-16 mx-auto" src={Sun} alt="" />
                    <p className="my-4">
                        <span className="mx-5">1</span>
                        <span className="mx-5">2</span>
                    </p>
                </div>

                <div className="flex flex-col items-center gap-3 p-3">
                    <h3 className="text-2xl font-bold text-slate-800">Order Summary</h3>
                    <p className="px-8 text-center text-sm text-slate-600">
                        You can now listen to millions of songs,
                        audiobooks and podcasts on any device anywhere you like!
                    </p>
                    <button
                        className="mt-3 mb-5 min-w-min rounded-lg 
                        bg-midnight p-3 text-sm font-semibold
                        text-white shadow-xl shadow-blue-700/30
                         outline-none transition-transform
                          hover:scale-105 hover:bg-blue-600
                          focus:scale-105 focus:bg-blue-600
                          focus:ring-2"
                    >
                        Proceed
                        to Payment
                    </button>
                </div>
            </div>
    </div>

</div>
)
}

export default BoxCard