import React from 'react'
import InputForm from './components/InputForm'
import Title from './components/Title'

interface member {
    key: string,
    name: string,
    funktionIG: string,
    teamrolle: string,
    comment: string,
    imgPath: string
}

interface memberCurrent {
    member: member;
}

function Bearbeiten(props: memberCurrent) {
    return (
        <main>
            <Title>Mitglied Bearbeiten</Title>
            <InputForm method='put' memberCurrent={props.member} />
        </main>
    )
}

export default Bearbeiten