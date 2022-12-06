import React, { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom';

interface toDelete {
    name: string;
    id: string;
}

function DeleteButton(props: toDelete) {

    const navigate = useNavigate();

    const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        let confirmed = window.confirm("Soll \"" + props.name + "\" wirklich aus der Datenbank gelöscht werden?")
        if (confirmed) deleteMember();
    }

    const deleteMember = async () => {
        const response = await fetch("https://api.usginfo.ch/members", {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                key: props.id,
            })
        })

        try {
            if (response.status !== 200) {
                window.alert("Ein Problem beim Löschen ist aufgetreten. Bitte kontaktiere einen Entwickler der Webseite.")
                return;
            }
            setTimeout(() => navigate("/admin"), 1000)
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <button onClick={clickHandler}
            className="bg-red-600 text-white text-lg px-3 py-1 mt-3 rounded
                          hover:bg-blue-200 hover:text-black transition-all
                          duration-200 w-fit"
        >
            Mitglied Löschen
        </button>
    )
}

export default DeleteButton