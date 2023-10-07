import StarsCanvas from '@/components/Stars'
import Scorecard from '@/components/scorecard'
import React from 'react'

const data = [
    {
        name: "teamName",
        rank: "1",
        score: "200"
    },
    {
        name: "teamName",
        rank: "2",
        score: "200"
    },
    {
        name: "teamName",
        rank: "3",
        score: "200"
    },
    {
        name: "teamName",
        rank: "4",
        score: "200"
    },
    {
        name: "teamName",
        rank: "5",
        score: "200"
    },
    {
        name: "teamName",
        rank: "6",
        score: "200"
    },
    {
        name: "teamName",
        rank: "7",
        score: "200"
    },
    {
        name: "teamName",
        rank: "8",
        score: "200"
    },
    {
        name: "teamName",
        rank: "9",
        score: "200"
    },
    {
        name: "teamName",
        rank: "10",
        score: "200"
    },
]


const leaderboard = () => {
  return (
    <div className="bg-black z-0 relative">
        <div className="flex flex-col justify-center items-center pt-[50px] pb-[50px] gap-8 ">

            <h1 className="font-bold text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
            LEADERBOARD
            </h1>

            {
                data.map((item, ind)=>(
                    <Scorecard 
                        key={ind}
                        name={item.name}
                        rank={item.rank}
                        score={item.score}
                    />
                ))
            }
        </div>
            <StarsCanvas />
    </div>
  )
}

export default leaderboard