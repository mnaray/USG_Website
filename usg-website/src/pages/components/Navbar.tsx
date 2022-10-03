import React from 'react'
import logo from "../../logos/cropped_logo.png";
import { Link } from 'react-router-dom';
import Button from './Button';


function Navbar() {
    return (
        <header className='flex flex-row justify-between w-full p-5 items-center bg-black'>
            <nav className='flex flex-row justify-start items-center'>
                <div className='h-20 mr-10'>
                    <Link to="/">
                        <img
                            src={logo}
                            alt="Logo des Teams"
                            className="hover:scale-110 transition-all duration-200 h-full"
                        />
                    </Link>
                </div>
                <ul className='flex flex-row align-middle space-x-5 text-white text-xl
                                divide-x-2 divide-gray-600 child:pl-5 child:child:py-1
                                child:child:px-2 child:child:rounded child:child:text-center
                                child:child-hover:bg-white child:child-hover:text-black
                                child:child:transition-all child:child:duration-200'>
                    <li>
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="feed">Feed</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="kontakt">Kontakt</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="ueber-uns">Über Uns</Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to="unser-team">Unser Team</Link>
                        </div>
                    </li>
                </ul>
            </nav>
            <Button text='Mitglied werden' destination='kontakt/bewerben' />
        </header>
    )
}

export default Navbar