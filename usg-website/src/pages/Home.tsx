import React from "react";
import "../css/tailwind.css";
import Logo from "./components/Logo";
import Slogan from "./components/Slogan";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <Logo />
        <p>We are USG! 🎮</p>
        <p className="text-red-400">Our Website will be up soon!</p>
      </header>
    </div>
  );
}

export default App;
