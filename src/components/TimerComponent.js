import React from 'react'

const TimerComponent = ({label, value}) => {
  return (
    <div className="text-center mx-2 my-4">
        <h1 className="text-3xl md:text-6xl text-white">{value}</h1>
        <h2 className="text-white">{label}</h2>
    </div>
  )
}

export default TimerComponent