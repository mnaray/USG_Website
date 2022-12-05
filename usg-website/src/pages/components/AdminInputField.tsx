import React, { ChangeEvent, useState } from 'react'

interface inputField {
    label: string;
    optional: boolean;
    placeholder?: string;
    default?: string;
}

function AdminInputField(props: inputField) {

    const [inputValue, setInputValue] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    return (
        <label htmlFor={props.label} className="flex flex-col mb-5">
            {props.label}{props.optional ? " (optional)" : ""}:
            <input
                type="text"
                id={props.label}
                placeholder={props.placeholder}
                defaultValue={props.default}
                onChange={handleChange}
                className="h-8 rounded-md px-2 py-1 mt-1 bg-slate-700"
                value={inputValue}
            />
        </label>
    )
}

export default AdminInputField