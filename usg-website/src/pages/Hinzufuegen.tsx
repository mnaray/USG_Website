import React from 'react'
import InputForm from './components/InputForm'
import Title from './components/Title'

function Hinzufuegen() {
    return (
        <main>
            <Title>Mitglied Hinzufügen</Title>
            <InputForm method='post' />
        </main>
    )
}

export default Hinzufuegen