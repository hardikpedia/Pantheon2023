import React from 'react'

export default function Scorecard({rank, name, score}) {
  return (
    <div className=' flex justify-evenly gap-40 mx-auto text-center bg-primary bg-pink-200  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.09] rounded-lg  w-[90%] sm:w-[80%] md:w-[60%]'>
        <div className='p-4 text-gray-400 font-semibold flex gap-4'> 
        <div>
            {rank}.
        </div>
        {name} 
        </div>
        <div className='p-4 text-white/50 font-semibold '> {score} </div>
    </div>
  )
}

 