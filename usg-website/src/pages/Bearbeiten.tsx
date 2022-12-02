import React, { useState } from 'react'
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
    memberKey: string;
}

function Bearbeiten(props: memberCurrent) {

    const [member, setMember] = useState<member>({
        key: "-",
        name: "Loading...",
        funktionIG: "-",
        teamrolle: "-",
        comment: "-",
        imgPath: "",
    })

    const getMemberData = async () => {
        const response = await fetch("https://api.usginfo.ch/members/" + props.memberKey, {
            method: "GET"
        });

        try {
            const responseJson: member = await response.json();
            setMember(responseJson);
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <main>
            <Title>Mitglied Bearbeiten</Title>
            <InputForm method='put' memberCurrent={member} />
        </main>
    )
}

export default Bearbeiten