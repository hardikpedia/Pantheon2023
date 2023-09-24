import React from 'react'
import Image from 'next/image'
import Carousel from '@/components/Carousel/Carousel'
import CarouselCard from '@/components/Carousel/CarouselCard'
const About = () => {
  return (
    <div className='h-screen w-screen bg-black flex flex-col justify-center items-center' >
        <h1 className="font-bold text-6xl z-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">PANTHEON 2022</h1>
        

        <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <Carousel
                show={4}
                infiniteLoop
            >
                <CarouselCard path='/about/1.jpg' />
                <CarouselCard path='/about/2.jpg' />
                <CarouselCard path='/about/3.jpg' />
                <CarouselCard path='/about/4.jpg' />
                <CarouselCard path='/about/5.jpg' />
                <CarouselCard path='/about/6.jpg' />
                <CarouselCard path='/about/7.jpg' />
                <CarouselCard path='/about/8.jpg' />
                <CarouselCard path='/about/9.jpg' />
                <CarouselCard path='/about/10.jpg' />
                <CarouselCard path='/about/11.jpg' />
                <CarouselCard path='/about/12.jpg' />
            </Carousel>
        </div>

    </div>
  )
}

export default About