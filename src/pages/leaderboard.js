import StarsCanvas from '@/components/Stars'
import Scorecard from '@/components/scorecard'
import React, { useEffect } from 'react'

var data = [
    {
        name: "Dhoom Dhadaka",
        score: "300"
    },
    {
        name: "octaGlitch",
        score: "200"
    },
    {
        name: "3.0",
        score: "200"
    },
    {
        name: "Mahesh",
        score: "200"
    },
    {
        name: "Rom Rom Bhaiyon",
        score: "150"
    },
    {
        name: "Hekrr",
        score: "150"
    },
    {
        name: "Hexagon",
        score: "120"
    },
    {
        name: "VAAS",
        score: "120"
    },
    {
        name: "VRQTZ",
        score: "100"
    },
    {
        name: "Oni Chan",
        score: "90"
    },
    {
        name: "Lavender",
        score: "80"
    },
    {
        name: "369",
        score: "80"
    },
    {
        name: "Pahaan",
        score: "50"
    },
    {
        name: "Hey Baby",
        score: "70"
    },
    {
        name: "Name 404",
        score: "70"
    },
    {
        name: "Team Z",
        score: "50"
    },
    {
        name: "OtoChan",
        score: "30"
    },
    {
        name: "Hydra X",
        score: "40"
    },
    {
        name: "Anantam",
        score: "40"
    },
    
    {
        name: "Proxima",
        score: "30"
    },
    
    {
        name: "Black Widow",
        score: "50"
    },
    
    {
        name: "cout << \"The Boys\";",
        score: "30"
    },
    
    {
        name: "NODDY",
        score: "80"
    },
    {
        name: "Black",
        score: "30"
    },
    
    {
        name: "Galactio",
        score: "30"
    },
    
    
]




const leaderboard = () => {
    data = data.sort(
        (p1, p2) => 
        (p1.price < p2.price) ? 1 : (p1.price > p2.price) ? -1 : 0)
        
    
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
                        rank={ind}
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