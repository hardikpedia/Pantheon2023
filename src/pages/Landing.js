import { useState, useRef, useEffect } from "react"
import TimerComponent from "@/components/TimerComponent"

const Landing = () => {

    const [days, setDays] = useState('00')
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        var countDownDate = new Date("Oct 07, 2023, 00:00:00").getTime();

        interval = setInterval(function(){
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance/(1000*60*60*24));
            var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
            var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
            var seconds = Math.floor((distance%(1000*60))/1000);

            if(distance < 0){
                //stop timer
                clearInterval(interval.current)
            }else{
                //update timer
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        
        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    })

  return (
    <div className='w-[500px] flex flex-row justify-center items-center fixed left-[50%] translate-x-[-50%] bottom-[15%] z-100 bg-transparent text-white' >
        {/* <h1 className="text-6xl " >Coming Soon...</h1> */}
        
        <TimerComponent 
            label="DAYS"
            value={days}
        />
        <TimerComponent 
            label="HOURS"
            value={hours}
        />
        <TimerComponent 
            label="MINS"
            value={minutes}
        />
        <TimerComponent 
            label="SEC"
            value={seconds}
        />
        

    </div>
  )
}

export default Landing