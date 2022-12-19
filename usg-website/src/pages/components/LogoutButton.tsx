import React, { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
    const navigate = useNavigate();

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        sessionStorage.removeItem("token");
        navigate("/")
    }
    return (
        <button onClick={handleClick}
            className="bg-red-600 text-white text-lg px-3 py-1 mt-3 rounded
                            hover:bg-blue-200 hover:text-black transition-all
                            duration-200 w-fit"
        >
            Logout
        </button>
    )
}

export default LogoutButton