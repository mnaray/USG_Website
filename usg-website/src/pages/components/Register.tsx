import React, { FormEvent } from "react";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmitButton from "./SubmitButton";

function Register() {
  const navigate = useNavigate();

  const [uname, setUname] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [pwAgain, setPwAgain] = useState<string>("");
  const [badCredMsg, setBadCredMsg] = useState<string>("");

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!verifyInputs()) return;
    addUser();
  };

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
      if (uname.length < 1) throw new InvalidLoginData('Bitte Nutzernamen eingeben.');
      if (pw.length < 8) throw new InvalidLoginData('Bitte mind. 8 Zeichen fürs Passwort eingeben.');
      if (pw.search(/[@~`!#$%^&*()-+=-{}[]|:;"'<$>,.?]/) === -1) throw new InvalidLoginData('Kein Sonderzeichen im Passwort');
      if (pwAgain !== pw) throw new InvalidLoginData('Passwörter stimmen nicht überein!');
      return true;
    } catch (err: any) {
      alert(err.msg);
      return false;
    }
  };

  const addUser = async () => {
    const response = await fetch("https://api.usginfo.ch/auth/registration", {
      mode: "cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: uname,
        password: pw
      }),
    });

    try {
      const responseJson = await response.json();
      if (responseJson.success) {
        alert(`WICHTIG: Es wurde ein Nutzer mit dem Nutzernamen ${uname} erstellt. ` +
          `Dieser muss vor dem ersten Login noch von einem Administrator bewilligt werden. ` +
          `Bitte Kontaktiere einen Administrator, damit dies geschehen kann.`)
        navigate("/login");
      } else {
        setBadCredMsg("Es gab einen Fehler bei der Registration.")
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="">
      <form className="flex flex-col items-center " onSubmit={submitHandler}>
        <label htmlFor="name">Nutzername:</label>
        <input
          type="text"
          name="username"
          className="text-neutral-800 m-2 p-2 bg-slate-500 rounded"
          id="username"
          placeholder="Nutzername"
          onChange={(e) => setUname(e.target.value)}
        />
        <label htmlFor="password">Passwort:</label>
        <input
          type="password"
          id="pw-login"
          className="text-neutral-800 m-2 p-2 bg-slate-500 rounded"
          name="password"
          placeholder="Passwort"
          onChange={(e) => setPw(e.target.value)}
        />
        <input
          type="password"
          id="pw-again-login"
          className="text-neutral-800 m-2 p-2 bg-slate-500 rounded"
          name="passwordagain"
          placeholder="Passwort bestätigen"
          onChange={(e) => setPwAgain(e.target.value)}
        />
        <SubmitButton redirect={false} >Registrieren</SubmitButton>
      </form>
      <p className="text-red-600">{badCredMsg}</p>
      <p className="mt-5">
        Breits ein Konto? <Button text="Login" destination="/login" />
      </p>
    </div>
  );
}

export default Register;
