import Image from 'next/image'
import { Inter } from 'next/font/google'
import Landing from './Landing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
      <Landing />
    </div>
  )
}
