import React from 'react'
import JoinTeam from './jointeam';

export default function JoinModel ({visible, onClose}) {
    if(!visible) return null;

    const handleOnClose = (e) => {
        if(e.target.id === 'container')
        onClose()
    }

  return (
    <div id='container' onClick={handleOnClose} className='fixed inset-0  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center' >
        <div className='bg-white rounded p-2' >
            <JoinTeam />
        </div>
    </div>
  )
}
