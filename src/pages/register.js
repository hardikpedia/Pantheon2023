"use client"
import { useState } from 'react';
import JoinModel from '@/components/joinTeamPopup';
import React from 'react'
import TeamRegisterModel from '@/components/registerTeamPopup';
import Image from 'next/image';

const Register = () => {

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

    return (
        <div className='bg-black flex flex-col h-screen justify-center items-center' >
            <Image className=' mb-4' src = '/Pantheon_Emblem_White.png' alt='pantheon logo' height={200} width={200} />
            <div className='flex flex-col justify-center items-center mt-15'>
                <div id='join' onClick={handleClick} className='text-white cursor-pointer top-35 ' > Hello Prateek </div>
                <div id='join' onClick={handleClick} className='text-white cursor-pointer ' > Your Pantheon ID is  </div>
                <div id='join' onClick={handleClick} className='text-white cursor-pointer mb-7' > PANTHEON12345 </div>
                
                <div id='join' onClick={handleClick} className='m-2 cursor-pointer font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center' > Join a team </div>
                <div id='create' onClick={handleClick} className='m-2 cursor-pointer font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] bg-gradient-to-r from-purple-400 to-pink-600 flex items-center justify-center'  > Create a team </div>
            </div>
            <JoinModel onClose={handleOnClose} visible={joinTeamModel} />
            <TeamRegisterModel onClose={handleOnClose} visible={createTeamModel} />
        </div>
    )
}

export default Register