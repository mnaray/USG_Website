import React from 'react';
import LogoutButton from './LogoutButton';

function Logout() {
    return (
        <div className='flex flex-col items-center'>
            <p className='text-xl mb-4'>Du bist schon eingeloggt! Keine Lust mehr?</p>
            <LogoutButton />
        </div>
    )
}

export default Logout