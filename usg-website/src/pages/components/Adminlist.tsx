import React, { useState, useEffect } from 'react';
import AdminlistItem from "./AdminlistItem";

interface member {
    key: string,
    name: string,
    funktionIG: string,
    teamrolle: string,
    comment: string,
    imgPath: string
}

interface membersResponse {
    items: member[],
    count: number
}

function Adminlist() {

    const [peopleData, setPeopleData] = useState<member[]>([{
        key: "-",
        name: "Loading...",
        funktionIG: "-",
        teamrolle: "-",
        comment: "-",
        imgPath: "",
    }])

    const getPeopleData = async () => {
        const response = await fetch("https://api.usginfo.ch/members", {
            mode: "cors",
            method: "GET"
        });

        try {
            const responseJson: membersResponse = await response.json();
            setPeopleData(responseJson.items)
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getPeopleData();
    }, [])

    const itemArray = peopleData.map((person) => {
        return (
            <AdminlistItem
                id={person.key}
                img={person.imgPath}
                name={person.name}
                funktionIG={person.funktionIG}
                teamrolle={person.teamrolle}
                comment={person.comment}
            />
        )
    })

    return (
        <ul className='flex flex-col justify-start w-4/6'>
            {itemArray}
        </ul>
    )
}

export default Adminlist