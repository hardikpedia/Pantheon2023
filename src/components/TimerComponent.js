import React from 'react'

const TimerComponent = ({ label, value }) => {
  return (
    <div className="text-center mx-2 my-4">
      <h1 className="font-bold text-6xl z-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{value}</h1>
      <h2 className="text-sm -mt-9 text-white -z-40 mb-4 ">{label}</h2>
    </div>
  )
}

export default TimerComponent