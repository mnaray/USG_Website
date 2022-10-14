import React from "react";
import "../css/tailwind.css";
import Logo from "./components/Logo";

function Home() {
  return (
    <main>
      <Logo />
      <p>We are USG! 🎮</p>
      <p className="text-orange-600">Our Website will be up soon!</p>
    </main>
  );
}

export default Home;
