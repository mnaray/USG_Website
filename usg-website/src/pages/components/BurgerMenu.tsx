import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../logos/cropped_logo.png";
import Button from "./Button";
import { CgMenuRound } from "react-icons/cg";
import { useState } from "react";
import NavLinksBurger from "./NavLinksBurger";

function Willkommenstext() {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex flex-col justify-center w-full p-5 hidden sm:flex items-center bg-black">
      <nav className="flex flex-col justify-start items-center">
        <CgMenuRound
          className="text-5xl text-start cursor-pointer"
          onClick={() => setOpen(!open)}
          color="white"
        />
        {open && <NavLinksBurger />}
      </nav>
    </header>
  );
}

export default Willkommenstext;
