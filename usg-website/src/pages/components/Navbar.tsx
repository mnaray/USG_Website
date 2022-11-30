import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logos/cropped_logo.png";
import Button from "./Button";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <header className="flex flex-row justify-between w-full p-5 items-center md:hidden bg-black">
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
      <div className="flex flex-row">
        <div className="m-2">
          <Button
            text="GitHub-Repository"
            destination="https://github.com/mnaray/USG_Website"
          />
        </div>
        <div className="m-2">
          <Button text="Mitglied werden" destination="kontakt/bewerben" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
