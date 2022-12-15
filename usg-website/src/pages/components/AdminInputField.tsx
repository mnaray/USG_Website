import React from 'react'

interface inputField {
    label: string;
    optional: boolean;
    placeholder?: string;
    default?: string;
}

function AdminInputField(props: inputField) {
    return (
        <label htmlFor={props.label} className="flex flex-col mb-5">
            {props.label}{props.optional ? " (optional)" : ""}:
            <input
                type="text"
                id={props.label}
                placeholder={props.placeholder}
                defaultValue={props.default}
                className="h-8 rounded-md px-2 py-1 mt-1 bg-slate-700"
            />
        </label>
    )
}

export default AdminInputField