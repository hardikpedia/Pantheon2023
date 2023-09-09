/* eslint-disable jsx-a11y/anchor-is-valid */
"use client"
import React, { useEffect, useState } from 'react';



function EventPage(props) {
    let data;
    let de;



    const [arr, setarr] = useState({});



    return (
        <div className='bg-cover h-screen items-center justify-center flex' style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.07),rgba(0,0,0,1)) , url('/pantheon_main_black.png')` }}>

            <div className='lg:flex brightness-100 bg-cover text-white' >


                <img src="/recruitmentvideo.png" className=' h-[40%] w-[60%] lg:w-96  lg:h-[80%] rounded-2xl mx-auto lg:mx-0 lg:ml-[5%] lg:mr-[1%] lg:mt-16 lg:pt-0 pt-20 lg:mb-16' alt=""></img>

                <div className='info mb-20 pb-28 backdrop-blur-sm backdrop-brightness-105 bg-black/75 mr-10 ml-[5%] md:ml-[0%] mt-16 lg:mb-16 rounded-2xl div   pl-5'>
                    <div className='text-5xl md:text-6xl font-medium mt-6 pt-12 md:pt-0'>
                        <div>Capture The Flag</div>

                    </div>
                    <div className='mt-3 ml-2 text-lg'><span className='font-bold text-xl'>Club : </span>IEEE, BIT Mesra</div>
                    <div className='text-2xl mt-6 pt-2 ml-2'>6th Septemper, 2023</div>
                    <div className='space-y-2 lg:flex '>
                        <div className='text-lg flex pt-6 ml-2'> <span className='font-bold text-xl'>Venue : </span> <div className='ml-2 bg-white py-0.5 text-base font-medium w-fit px-2 rounded-lg text-black'>Online</div></div>
                        <div className='text-lg flex pt-6 ml-2 lg:pl-20'>  <span className='font-bold text-xl'>Type : </span> <div className='ml-2 bg-white py-0.5 text-base font-medium w-fit px-2 rounded-lg text-black'>Formal</div></div>
                    </div>
                    <div className='mt-10'>
                        <span className='font-bold text-2xl '>Description : </span>
                        <div className='text-2xl font-medium ml-1 mr-20 mt-4'>
                            36 hrs long event in which participants attempt to find text strings, called "flags", which are secretly hidden in purposefully-vulnerable programs or websites. There will be multiple challenges with some points. Team with maximum points wins. Team size can be maximum of 3 members.                        </div>



                    </div>


                </div>
            </div>


        </div>
    )
};

export default EventPage;
