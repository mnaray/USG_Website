import React, { ChangeEvent, FormEvent } from "react"
import Button from "./Button"
import { useState } from "react";

function Register() {

    const [pwloginbefore, setpwloginbefore] = useState<string>("")
    const [pwagainbefore, setpwagainbefore] = useState<string>("")

    // setpwloginbefore((document.getElementById("pw-login") as HTMLInputElement).value)
    // setpwagainbefore((document.getElementById("pw-again-login") as HTMLInputElement).value)

    // const pwlogin = (document.getElementById("pw-login") as HTMLInputElement).value
    // const pwagain = (document.getElementById("pw-again-login") as HTMLInputElement).value


    const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setpwloginbefore((document.getElementById("pw-login") as HTMLInputElement).value)
        setpwagainbefore((document.getElementById("pw-again-login") as HTMLInputElement).value)
    }

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (pwloginbefore !== pwagainbefore) {
            console.log("Passwort stimmt nicht überein")
            alert("Passwort stimmt nicht überein")
        }
        if (pwloginbefore === pwagainbefore) {
            console.log("Passwort stimmt überein")
            addUser();
        }
        if (pwloginbefore.length < 8) {
            alert("mind 8 Zeichen")
        }
        if (pwagainbefore.length <= 8) {
            alert("mind 8 Zeichen")
        }
        if (pwloginbefore.search(/[@\~\`\!\#\$\%\^\&\*\(\)\-\_\+\=\-\{\}\[\]\|\/\\\:\;\"\'\<\>\,\.\?]/) == -1) {
            alert("No Special Number")
        }
    }

    const addUser = async () => {
        const response = await fetch("https://api.usginfo.ch/auth/registration", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({

                username: document.getElementById("username"),
                password: pwloginbefore
            })
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error) => console.log(error));
    }
    return (
        <div className="">
            <form className='flex flex-col items-center ' onSubmit={submitHandler}>
                <label htmlFor="name">Username: </label>
                <input type="text" name="username" className='text-neutral-800 m-2 p-2 bg-slate-500 rounded' id="username" placeholder='username' required minLength={4} />
                <label htmlFor="password">Password: </label>
                <input type="password" id="pw-login" className='text-neutral-800 m-2 p-2 bg-slate-500 rounded' name='password' placeholder='password' defaultValue={pwloginbefore} onChange={changeHandler} />
                <input type="password" id="pw-again-login" className='text-neutral-800 m-2 p-2 bg-slate-500 rounded' name='passwordagain' placeholder='password wiederholen' required defaultValue={pwagainbefore} onChange={changeHandler} />
                <button type="submit" onSubmit={function (e) { e.preventDefault(); return false; }} className='bg-gray-900 p-2 rounded'>Submit</button>
            </form>
            <p className="m-5">Breits ein Konto? <Button text="Anmelden" destination="../login" /></p>
        </div>
    )
}

export default Register

