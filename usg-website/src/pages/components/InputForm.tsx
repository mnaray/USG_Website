import React, { FormEvent, useState } from 'react'
import AdminInputField from './AdminInputField'
import SubmitButton from './SubmitButton'
import DeleteButton from './DeleteButton'

interface member {
    key: string,
    name: string,
    funktionIG: string,
    teamrolle: string,
    comment: string,
    imgPath: string
}

interface inputFormat {
    memberCurrent?: member,
    method: string
}

function InputForm(props: inputFormat) {

    const [status, setStatus] = useState<string[]>(["color-white", "Noch keine Änderungen vorgenommen,"])

    const submitData = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nameValue = (document.getElementById("Name") as HTMLInputElement).value;
        const funktionIGValue = (document.getElementById("Funktion-IG") as HTMLInputElement).value;
        const teamrolleValue = (document.getElementById("Teamrolle") as HTMLInputElement).value;
        const commentValue = (document.getElementById("Kommentar") as HTMLInputElement).value;

        const response = await fetch("https://api.usginfo.ch/members", {
            method: props.method,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: nameValue,
                funktionIG: funktionIGValue,
                teamrolle: teamrolleValue,
                comment: commentValue,
                key: props.memberCurrent?.key,
            }),
        })

        try {
            if ([200, 201].includes(response.status)) {
                setStatus(["text-green-500", "Änderungen wurden gespeichert."])
            } else {
                console.log("The server responded with a status of: " + response.status);
                setStatus(["text-red-500", "Es ist ein Fehler aufgetreten. Bitte kontaktiere einen Entwickler dieser Seite."])
            }
        } catch (err) {
            console.error(err)
        }
    }

    const button = () => {
        if (props.memberCurrent) {
            return (<DeleteButton name={props.memberCurrent.name} id={props.memberCurrent.key} />);
        } else {
            return;
        }
    }

    return (
        <div className='flex flex-col justify-evenly'>
            <form onSubmit={submitData} className='flex flex-col justify-between'>
                <AdminInputField label='Name' placeholder='Pseudonym/Namen eingeben' optional={false} default={props.memberCurrent?.name} />
                <AdminInputField label='Teamrolle' placeholder='Teamrollen eingeben' optional={false} default={props.memberCurrent?.teamrolle} />
                <AdminInputField label='Funktion-IG' placeholder='In-Game Funktion eingeben' optional={true} default={props.memberCurrent?.funktionIG} />
                <AdminInputField label='Kommentar' placeholder='Kommentar eingeben' optional={true} default={props.memberCurrent?.comment} />
                <SubmitButton redirect={true} >Speichern</SubmitButton>
                <p className={status[0]}>{status[1]}</p>
            </form>
            <form method={props.method} encType='multipart/form-data' className='flex flex-col justify-between mt-10'>
                <input type="file" name="file" className='mb-5' />
                <SubmitButton redirect={false} >Update</SubmitButton>
            </form>
            {button()}
        </div>
    )
}

export default InputForm
