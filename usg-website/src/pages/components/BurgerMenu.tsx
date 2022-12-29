import React from "react";
import { CgMenuRound } from "react-icons/cg";
import { useState } from "react";
import NavLinksBurger from "./NavLinksBurger";

function BurgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex-col justify-center w-full p-5 hidden md:flex items-center bg-black">
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

export default BurgerMenu;
