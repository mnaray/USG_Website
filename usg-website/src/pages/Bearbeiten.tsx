import React, { useEffect, useState } from 'react'
import InputForm from './components/InputForm'
import Title from './components/Title'
import { useLocation } from 'react-router-dom'

interface member {
    key: string,
    name: string,
    funktionIG: string,
    teamrolle: string,
    comment: string,
    imgPath: string
}

function Bearbeiten() {

    const [member, setMember] = useState<member | undefined>(undefined)

    const location = useLocation();
    const key: string = location.state.id;

    const getMemberData = async () => {
        const response = await fetch("https://api.usginfo.ch/members/" + key, {
            method: "GET"
        });

        try {
            const responseJson: member = await response.json();
            setMember(responseJson);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getMemberData();
    }, [key])

    return (
        <main>
            <Title>Mitglied Bearbeiten</Title>
            <InputForm method='put' memberCurrent={member} />
        </main>
    )
}

export default Bearbeiten