import React from "react"
import { Link } from "react-router-dom"
import LogoImage from "../../logos/cropped_logo.png"

function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={LogoImage} alt="Logo" className="h-72 sm:h-44"></img>
      </Link>
    </div>
  )
}

export default Logo
