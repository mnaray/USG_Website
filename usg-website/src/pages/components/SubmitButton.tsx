import React, { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom';

interface submitButton {
    children: string;
    redirect: boolean;
}

function SubmitButton(props: submitButton) {

    const navigate = useNavigate();
    const redirectUser = (event: MouseEvent<HTMLInputElement>) => {
        if (props.redirect) setTimeout(() => navigate("/admin"), 1500);
    }

    return (
        <input
            type="submit"
            value={props.children}
            onClick={redirectUser}
            className='bg-blue-600 rounded-md w-fit py-1 px-3 text-lg hover:bg-blue-200
                    hover:text-black transition-all duration-200'
        />
    )
}

export default SubmitButton