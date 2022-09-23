import React from "react"
import { Link } from "react-router-dom"
import LogoImage from "../../logos/USG_Logo_Transparent_PNG.png"

function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={LogoImage} alt="Logo" className="h-40v scale-125"></img>
      </Link>
    </div>
  )
}

export default Logo
