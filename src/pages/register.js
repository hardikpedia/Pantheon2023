"use client"
import { useState } from 'react';
import JoinModel from '@/components/joinTeamPopup';
import React from 'react'
import TeamRegisterModel from '@/components/registerTeamPopup';

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
            <div id='join' onClick={handleClick} className='text-white cursor-pointer' > Join a team </div>
            <div id='create' onClick={handleClick} className='text-white cursor-pointer' > Create a team </div>
            <JoinModel onClose={handleOnClose} visible={joinTeamModel} />
            <TeamRegisterModel onClose={handleOnClose} visible={createTeamModel} />
        </div>
    )
}

export default Register