import React from 'react'
import Adminlist from './components/Adminlist'
import CircularButton from './components/CircularButton'
import LogoutButton from './components/LogoutButton'
import Title from './components/Title'

function Adminbereich(): JSX.Element {
    return (
        <main>
            <div className='ml-auto mr-16 h-fit'>
                <LogoutButton />
            </div>
            <Title>Adminarea - Mitgliedverwaltung</Title>
            <Adminlist />
            <CircularButton destination='hinzufuegen' />
        </main>
    )
}

export default Adminbereich