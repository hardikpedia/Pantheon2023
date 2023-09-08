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
      <div className='fixed scale-125 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-100 bg-transparent'>
        <div>
          <Image src="/pantheon_main_white.png" alt="pantheon" width={500} height={500} className=' text-white' />
        </div>
        <div className='flex justify-center items-center'>
          <Landing />
        </div>

      </div>

    </div>
  )
}
