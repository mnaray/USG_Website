import React from 'react'

interface inputField {
    label: string;
    placeholder?: string;
}

function AdminInputField(props: inputField) {
    return (
        <label htmlFor={props.label}>
            {props.label}:
            <input type="text" placeholder={props.placeholder} />
        </label>
    )
}

export default AdminInputField