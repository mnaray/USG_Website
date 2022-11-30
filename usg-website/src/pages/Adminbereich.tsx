import React from 'react'
import Adminlist from './components/Adminlist'
import CircularButton from './components/CircularButton'

function Adminbereich(): JSX.Element {
    return (
        <main>
            <Adminlist />
            <CircularButton destination='hinzufuegen' />
        </main>
    )
}

export default Adminbereich