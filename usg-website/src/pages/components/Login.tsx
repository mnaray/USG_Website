import React, { FormEvent, useState } from "react"
import { CgWindows } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Button from "./Button"

interface authResponse {
    error?: string;
    success: boolean;
}

function Login() {
    const navigate = useNavigate();

    const [uname, setUname] = useState("");
    const [pswd, setPswd] = useState("");

    const submitLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch("https://api.usginfo.ch/auth/login", {
            mode: "cors",
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: uname,
                password: pswd
            })
        })

        try {
            const responseJson: authResponse = await response.json();
            if (responseJson.success) {
                sessionStorage.setItem('loggedIn', 'true');
                navigate("/admin")
            } else {
                console.log(responseJson)
            }
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="flex flex-col">
            <form className='flex flex-col items-center' onSubmit={submitLogin}>
                <label htmlFor="name">Username: </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder='Username'
                    onChange={(e) => setUname(e.target.value)}
                    className='text-neutral-800 m-2 p-2 bg-slate-500 rounded'
                />
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    id="password"
                    name='Password'
                    placeholder='password'
                    onChange={(e) => setPswd(e.target.value)}
                    className='text-neutral-800 m-2 p-2 bg-slate-500 rounded'
                />
                <button type="submit" className='bg-gray-900 p-2 rounded'>Submit</button>
            </form>
            <div className="flex flex-row mt-5 items-center">
                <p className="m-5">Kein Konto?</p>
                <Button text="Registrieren" destination="../register" />
            </div>
        </div>
    )
}

export default Login

