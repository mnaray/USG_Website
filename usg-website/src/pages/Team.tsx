import React from "react"
import MembercardGrid from "./components/MembercardGrid"
import Title from "./components/Title"

function Team() {
  return (
    <main>
      <Title title="Unser Team" />
      <div className="flex flex-col items-center w-1/3">
        <p className="justify-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          libero magni et, fugit, aperiam ipsa fugiat dignissimos reprehenderit
          at laboriosam a ex corrupti error placeat aut neque blanditiis velit
          debitis.
        </p>
      </div>
      <MembercardGrid />
    </main>
  )
}

export default Team
