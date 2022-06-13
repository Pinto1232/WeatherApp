import React from 'react'

const BoxCard = () => {
return (
<div>
    <div className="flex  w-full items-center  justify-center bg-slate-200">

            <div className="max-w-md rounded-xl bg-white  shadow-lg">
            <div className="p-8">
                <img src="https://i.ibb.co/RgnhN32/undraw-compose-music-ovo2.png" alt="" />
            </div>

            <div className="flex flex-col items-center gap-6 p-8">
                <h3 className="text-2xl font-bold text-slate-800">Order Summary</h3>
                <p className="px-8 text-center text-sm text-slate-600">You can now listen to millions of songs,
                    audiobooks and podcasts on any device anywhere you like!</p>


                <button
                    className="mt-3 w-full rounded-lg bg-midnight p-3 text-sm font-semibold text-white shadow-xl shadow-blue-700/30 outline-none transition-transform hover:scale-105 hover:bg-blue-600 focus:scale-105 focus:bg-blue-600 focus:ring-2">Proceed
                    to Payment</button>
            </div>
        </div>
    </div>

</div>
)
}

export default BoxCard