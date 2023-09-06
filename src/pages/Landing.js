import { useState, useRef, useEffect } from "react"

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
        
        <div className="flex flex-col justify-center items-center mt-10" >
            <div className="flex flex-col justify-center items-center mr-5" >
                <h1 className="text-6xl" >{days} : </h1>
            </div>
            <div className="flex flex-col justify-center items-center mr-5" >
                <h1 className="-ml-6" >DAYS</h1>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10" >
            <div className="flex flex-col justify-center items-center mr-5" >
                <h1 className="text-6xl" >{hours} :</h1>
            </div>
            <div className="flex flex-col justify-center items-center mr-5" >
                <h1 className="-ml-6" >HOURS</h1>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-10" >
            <div className="flex flex-col justify-center items-center mr-5" >
                <h1 className="text-6xl" >{minutes} :</h1>
            </div>
            <div className="flex flex-col justify-center items-center mr-5" >
                <h1 className="-ml-6" >MINS</h1>
            </div>
            
         </div>
        <div className="flex flex-col justify-center items-center mt-10" >
            <div className="flex flex-col justify-center items-center mr-5" >
                <h1 className="text-6xl" >{seconds}</h1>
            </div>
            <div className="flex flex-col justify-center items-center mr-5" >
                <h1 className="" >SEC</h1>
            </div>
        </div>

    </div>
  )
}

export default Landing