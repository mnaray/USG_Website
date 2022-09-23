import React from "react";
import "../css/tailwind.css";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="text-center">
      <header className="app-header">
        <Logo />
        <p>We are USG! 🎮</p>
        <p className="text-orange-600">Our Website will be up soon!</p>
      </header>
    </div>
  );
}

export default App;
