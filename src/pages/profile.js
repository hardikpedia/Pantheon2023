"use client"
import { useState } from 'react';
import JoinModel from '@/components/joinTeamPopup';
import React from 'react'
import TeamRegisterModel from '@/components/registerTeamPopup';
import { useStateContext } from '@/context';
import Image from 'next/image';
import Link from 'next/link';

const Register = () => {
    const { user, userinfo, setUser, setUserInfo } = useStateContext();
    const [joinTeamModel, setJoinTeamModel] = useState(false)
    const [createTeamModel, setCreateTeamModel] = useState(false)

    const handleOnClose = () => {
        setJoinTeamModel(false)
        setCreateTeamModel(false)
    }

    const handleClick = (e) => {
        if (e.target.id === 'join') {
            setJoinTeamModel(true)
        } else if (e.target.id === 'create') {
            setCreateTeamModel(true)
        }
    }
    if(user) {
        return (
            <div className='bg-black flex md:flex-row flex-col h-screen justify-evenly items-center pb-20' >
                <Image className='' src = '/Pantheon_Emblem_White.png' alt='pantheon logo' height={200} width={200} />
                <div className='flex flex-col justify-center items-center mt-15'>
                    <div id='join' onClick={handleClick} className='flex-1 font-poppins font-semibold text-[40px] lg:text-[52px] text-white  leading-[50px] lg:leading-[75px]' > Hello {userinfo.name} </div>
                    <div id='join' onClick={handleClick} className='font-poppins font-normal text-white/50 text-[18px] leading-[25px] flex md:text-start text-center md:leading-[30.8px]' > Your Pantheon ID is  </div>
                    <div id='join' onClick={handleClick} className='font-poppins font-normal text-white/50 text-[18px] leading-[25px] flex md:text-start text-center md:leading-[30.8px] mb-7' > {userinfo.pantheonid} </div>
                    
                    <div id='join' onClick={handleClick} className='m-2 cursor-pointer font-epilogue text-[16px] leading-[26px] min-h-[52px] bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-105 transform transition-all duration-200 ease-in-out text-white font-bold py-3 px-6 rounded-md' > Join a team </div>
                    <div id='create' onClick={handleClick} className='m-2 cursor-pointer font-epilogue text-[16px] leading-[26px] min-h-[52px] bg-gradient-to-r from-purple-400 to-pink-600 hover:scale-105 transform transition-all duration-200 ease-in-out text-white font-bold py-3 px-6 rounded-md'  > Create a team </div>
                </div>
                <JoinModel onClose={handleOnClose} visible={joinTeamModel} id={userinfo.pantheonid} />
                <TeamRegisterModel onClose={handleOnClose} visible={createTeamModel} id={userinfo.pantheonid} />
            </div>
        )
    }else{
        return(
            <div className='bg-black flex md:flex-row flex-col h-screen justify-evenly items-center pb-20' >
                <Image className='' src = '/Pantheon_Emblem_White.png' alt='pantheon logo' height={200} width={200} />
                <div className='flex flex-col justify-center items-center mt-15'>
                    <div id='join' onClick={handleClick} className=' text-center font-poppins font-semibold text-[40px] lg:text-[52px] text-white  leading-[50px] lg:leading-[75px]' > Welcome to Pantheon </div>
                    <div id='join' onClick={handleClick} className='font-poppins font-normal text-white/50 text-[18px] leading-[25px] flex md:text-start text-center md:leading-[30.8px]' > Please Login First </div>
                </div>
            </div>
        )
    }
    
}

export default Register