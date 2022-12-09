import React from 'react';
import { Link } from "react-router-dom";
import plusIcon from "../../logos/plus_icon.svg";

interface ButtonProps {
    destination: string;
}

function CircularButton(props: ButtonProps) {
    return (
        <div className='fixed bottom-16 right-20'>
            <Link to={props.destination}>
                <button className="bg-blue-600 text-lg rounded-full hover:bg-blue-200 transition-all
                                    duration-200 overflow-hidden leading-tight scale-105 hover:scale-125"
                    tabIndex={-1}>
                    <img src={plusIcon} alt="Plus-Icon für neues Mitglied hinzufügen" />
                </button>
            </Link>
        </div>
    )
}

export default CircularButton