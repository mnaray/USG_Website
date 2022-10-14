import React from "react";
import "../css/tailwind.css";
import Logo from "./components/Logo";
import Slogan from "./components/Slogan";
import Willkommenstext from "./components/Willkommenstext";

function Home() {
  return (
    <main>
      <Logo />
      <Slogan />
      <Willkommenstext />
    </main>
  );
}

export default Home;
