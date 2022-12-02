import React from "react"
import Button from "./Button"

function Register() {
    return (
        <div className="">
            <form className='flex flex-col items-center'>
                <label htmlFor="name">Username: </label>
                <input type="text" name="username" className='text-neutral-800 m-2 p-2 bg-slate-500' id="username" placeholder='username' required minLength={4} />
                <label htmlFor="password">Password: </label>
                <input type="password" className='text-neutral-800 m-2 p-2 bg-slate-500' id="password" name='password' placeholder='password' required minLength={8} />
                <label htmlFor="password">Password wiederholen: </label>
                <input type="password" className='text-neutral-800 m-2 p-2 bg-slate-500' id="passwordagain" name='passwordagain' placeholder='password wiederholen' required minLength={8} />
                <button type="submit" className='bg-gray-900 p-2 rounded'>Submit</button>
            </form>
            <p className="m-5">Breits ein Konto? <Button text="Anmelden" destination="../login" /></p>
        </div>
    )
}

export default Register

