import Image from 'next/image'
import { Inter } from 'next/font/google'
import Landing from '../components/Landing'
import Animation from '../components/Animation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className='h-screen w-full'>
        <Animation />

      </div>
      <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit flex flex-col  justify-center items-center  z-100 bg-transparent'>
        <div>
          <Image src="/pantheon_main_white.png" alt="pantheon" width={500} height={500} className='scale-100 sm:scale-110 md:scale-125 text-white' />
        </div>
        <div className='flex justify-center mt-10 items-center scale-[0.69] sm:scale-75 md:scale-100 '>
          <Landing />
        </div>

      </div>

    </div>
  )
}
