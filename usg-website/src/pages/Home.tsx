import React from "react";
import "../css/tailwind.css";
import Button from "./components/Button";
import Logo from "./components/Logo";
import Slogan from "./components/Slogan";
import Willkommenstext from "./components/Willkommenstext";

function Home() {
  return (
    <main className="p-5">
      <Logo />
      <Slogan />
      <Willkommenstext />
      <div className="flex flex-row justify-evenly min-w-fit py-8">
        <Button text="Bewirb Dich!" destination="../../kontakt/bewerben" />
        <p className="text-2xl px-2">,</p>
        <Button text="Scrim Us!" destination="../../kontakt/scrim-us" />
        <p className="text-2xl px-2">oder</p>
        <Button text="Über Uns" destination="ueber-uns" />
      </div>
    </main>
  );
}

export default Home;
