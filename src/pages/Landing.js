import { useState, useRef, useEffect } from "react"

const Landing = () => {

    const [days, setDays] = useState('00')
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')

    let interval = useRef()

    const startTimer = () => {
        var countDownDate = new Date("Oct 06, 2023, 00:00:00").getTime();

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
    <div className='flex flex-col items-center justify-center' >
        <h1 >PANTHEON 2023</h1>
        <h1 >Coming Soon</h1>

        <h1 >{days} Days {hours} Hours {minutes} Minutes {seconds} Seconds</h1>

    </div>
  )
}

export default Landing