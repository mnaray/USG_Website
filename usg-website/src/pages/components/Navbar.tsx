import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logos/cropped_logo.png";
import Button from "./Button";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <header className="flex flex-row justify-between w-full p-5 items-center sm:hidden bg-black">
      <nav className="flex flex-row justify-start items-center">
        <div className="h-20 mr-10">
          <Link to="/">
            <img
              src={logo}
              alt="Logo des Teams"
              className="hover:scale-110 transition-all duration-200 h-full"
            />
          </Link>
        </div>
        <NavLinks />
      </nav>
      <Button text="Mitglied werden" destination="kontakt/bewerben" />
    </header>
  );
}

export default Navbar;
