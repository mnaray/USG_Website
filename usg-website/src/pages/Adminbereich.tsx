import React from 'react'
import Adminlist from './components/Adminlist'
import CircularButton from './components/CircularButton'
import Title from './components/Title'

function Adminbereich(): JSX.Element {
    return (
        <main>
            <Title>Adminarea - Mitgliedverwaltung</Title>
            <Adminlist />
            <CircularButton destination='hinzufuegen' />
        </main>
    )
}

export default Adminbereich