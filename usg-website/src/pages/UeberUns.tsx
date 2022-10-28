import React from "react"
import Logo from "./components/Logo"
import Slogan from "./components/Slogan"
import Title from "./components/Title"

function UeberUns() {
  return (
    <main>
      <Title title="Über Uns" />
      <Logo />
      <Slogan />
      <h1 className="text-pink-600">Über Uns</h1>
    </main>
  )
}

export default UeberUns
