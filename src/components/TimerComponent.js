import React from 'react'

const TimerComponent = ({ label, value }) => {
  return (
    <div className="text-center mx-1 md:mx-2 my-1 md:my-4">
      <h1 className="text-3xl font-bold sm:text-6xl z-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{value}</h1>
      <h2 className=" text-[8px] sm:text-sm sm:-mt-9 -mt-[22px] text-white -z-40 mb-4 ">{label}</h2>
    </div>
  )
}

export default TimerComponent