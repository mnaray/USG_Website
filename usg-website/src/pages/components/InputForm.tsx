import React, { useEffect } from 'react'
import AdminInputField from './AdminInputField'
import SubmitButton from './SubmitButton'

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

    console.log(props.memberCurrent)
    return (
        <div className='flex flex-col justify-evenly'>
            <form method={props.method} className='flex flex-col justify-between'>
                <AdminInputField label='Name' placeholder='Pseudonym/Namen eingeben' optional={false} default={props.memberCurrent?.name} />
                <AdminInputField label='Teamrolle' placeholder='Teamrollen eingeben' optional={false} default={props.memberCurrent?.teamrolle} />
                <AdminInputField label='Funktion-IG' placeholder='In-Game Funktion eingeben' optional={true} default={props.memberCurrent?.funktionIG} />
                <AdminInputField label='Kommentar' placeholder='Kommentar eingeben' optional={true} default={props.memberCurrent?.comment} />
                <SubmitButton>Speichern</SubmitButton>
            </form>
            <form method={props.method} encType='multipart/form-data' className='flex flex-col justify-between mt-10'>
                <input type="file" name="file" className='mb-5' />
                <SubmitButton>Update</SubmitButton>
            </form>
        </div>
    )
}

export default InputForm
