import React from "react"
import Logo from "./components/Logo"
import Slogan from "./components/Slogan"

function Feed() {
  return (
    <div className="app-header">
      <Logo />
      <Slogan />
      <h1 className="text-pink-600">Bewerben</h1>
    </div>
  )
}

export default Feed
