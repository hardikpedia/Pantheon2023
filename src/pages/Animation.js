import * as THREE from 'three'
// import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Trail, OrbitControls, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Image from 'next/image';
import { useState, useRef, useEffect } from "react"

function ShootingStar() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 2
    ref.current.position.set(Math.sin(t) * 8, Math.atan(t) * Math.cos(t / 2) * 2)
  })
  
  return (
    <Trail width={5} length={8} color={new THREE.Color(2, 1, 10)} attenuation={(t) => t * t}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.25]} />
        <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
      </mesh>
    </Trail>
  )
}

function Logo() {

    const texture = useLoader(THREE.TextureLoader, "pantheon_main_black.png");
    
    return (
        <mesh >
        <planeGeometry attach="geometry" args={[10, 7.5]} />
        <meshLambertMaterial attach="material" map={texture} />
        </mesh>
    );
    
}

export default function Animation() {
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
          // eslint-disable-next-line react-hooks/exhaustive-deps
          clearInterval(interval.current)
      }
  })
  return (
    <div className='h-screen' >
        <Canvas className='fixed' camera={{ position: [0, 0, 15] }}>
            <color attach="background" args={['black']} />
            <ambientLight intensity={1} />
            {/* <ShootingStar /> */}
            <Stars saturation={false} count={800} speed={0.3} />
            <OrbitControls />
            <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={1} />
            </EffectComposer>
        </Canvas>
        <div className='fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-100 flex flex-col justify-center'>
          <Image src="/pantheon_main_white.png" alt="pantheon" width={500} height={500} className=' bg-transparent text-white' />
          <div className=' flex flex-row justify-center items-center bg-transparent text-white' >
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
        </div>
    </div>
  )
}

