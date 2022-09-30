import React from 'react'
import logo from "../../logos/USG_Logo_Transparent_PNG.png";
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <header className='flex flex-row w-screen'>
            <nav className='flex flex-row'>
                <div className='w-28'>
                    <Link to="/">
                        <img src={logo} alt="Logo des Teams" />
                    </Link>
                </div>
                <ul className='flex flex-row'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="feed">Feed</Link>
                    </li>
                    <li>
                        <Link to="kontakt">Kontakt</Link>
                    </li>
                    <li>
                        <Link to="ueber-uns">Über Uns</Link>
                    </li>
                    <li>
                        <Link to="unser-team">Unser Team</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar