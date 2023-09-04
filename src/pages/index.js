import Image from 'next/image'
import { Inter } from 'next/font/google'
import Landing from './Landing'
import Animation from './Animation'
import ShootingStars from './ShootingStars'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
      {/* <Landing /> */}
      {/* <ShootingStars /> */}
      <Animation />
      {/* <Image alt='13e' src={pantheon_main_black} /> */}

    </div>
  )
}
