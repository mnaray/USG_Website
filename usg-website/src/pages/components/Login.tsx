import React, { FormEvent, useState } from "react";
import { unstable_HistoryRouter, useNavigate } from "react-router-dom";
import Button from "./Button";
import SubmitButton from "./SubmitButton";

interface authResponse {
    error?: string;
    token?: string;
    success: boolean;
}

function Login() {
    const navigate = useNavigate();

    const [uname, setUname] = useState<string>("");
    const [pswd, setPswd] = useState<string>("");
    const [wrongLoginMsg, setWrongLoginMsg] = useState<string>("");

    const submitLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!verifyInputs()) return;

        const response = await fetch("https://api.usginfo.ch/auth/login", {
            mode: "cors",
            method: "POST",
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
            if (responseJson.success && responseJson.token) {
                sessionStorage.setItem('token', responseJson.token);
                navigate("/admin");
            } else {
                if (response.status == 403) {
                    setWrongLoginMsg("Noch nicht bewilligt. Bitte einen Administrator kontaktieren!");
                } else {
                    setWrongLoginMsg("Passwort oder Nutzername ungültig!");
                }
            }
        } catch (err: any) {
            console.error(err.msg);
        }
    }

    const verifyInputs = () => {
        class InvalidLoginData {
            msg: string;
            name: string;

            constructor(msg: string) {
                this.msg = msg;
                this.name = 'Invalid Login Data';
            }
        }

        try {
            if (uname.length < 1) throw new InvalidLoginData("Bitte Nutzernamen eingeben!")
            if (pswd.length < 1) throw new InvalidLoginData("Bitte Passwort eingeben!");
            return true;
        } catch (err: any) {
            alert(err.msg);
            return false;
        }
    };

    return (
        <div className="flex flex-col">
            <form className='flex flex-col items-center' onSubmit={submitLogin}>
                <label htmlFor="name">Nutzername: </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder='Nutzername'
                    onChange={(e) => setUname(e.target.value)}
                    className='text-neutral-800 m-2 p-2 bg-slate-500 rounded'
                />
                <label htmlFor="password">Passwort: </label>
                <input
                    type="password"
                    id="password"
                    name='Passwort'
                    placeholder='password'
                    onChange={(e) => setPswd(e.target.value)}
                    className='text-neutral-800 m-2 p-2 bg-slate-500 rounded'
                />
                <SubmitButton redirect={false} >Login</SubmitButton>
            </form>
            <p className="text-red-600">{wrongLoginMsg}</p>
            <div className="flex flex-row mt-5 items-center">
                <p className="m-5">Kein Konto?</p>
                <Button text="Registrieren" destination="../register" />
            </div>
        </div>
    )
}

export default Login

