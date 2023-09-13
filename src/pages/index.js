import Image from 'next/image'
import { Inter } from 'next/font/google'
import Landing from '../components/Landing'
import Animation from '../components/Animation'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className=''>
        <Animation />

      </div>
      <div className='mx-auto absolute top-[30%] md:top-[24%] flex flex-col w-[100%] justify-center items-center  z-100 bg-transparent'>
        <div>
          <Image src="/pantheon_main_white.png" alt="pantheon" width={500} height={500} className=' text-white' />
        </div>
        <div className='flex justify-center mt-10 items-center scale-[0.69] sm:scale-75 md:scale-100 '>
          <Landing />
        </div>

      </div>

    </div>
  )
}
