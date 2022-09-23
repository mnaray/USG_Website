import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/App.css'
import LogoImage from '../../logos/USG_Logo_Transparent_PNG.png'

function Logo() {
  return (
    <div>
        <Link to="/">
            <img src={LogoImage} alt="Logo" className="App-logo"></img>
        </Link>
    </div>
  )
}

export default Logo