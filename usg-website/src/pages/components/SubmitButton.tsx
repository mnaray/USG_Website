import React from 'react'

interface submitButton {
    children: string;
}

function SubmitButton(props: submitButton) {
    return (
        <input
            type="submit"
            value={props.children}
            className='bg-blue-600 rounded-md w-1/2 p-1 text-lg hover:bg-blue-200
                    hover:text-black transition-all duration-200' />
    )
}

export default SubmitButton