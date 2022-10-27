import React from "react";
import MembercardGrid from "./components/MembercardGrid";

function Team() {
  return (
    <main>
      <div className="flex flex-col items-center w-1/3">
        <p className="justify-center text-5xl m-5">Unser Team</p>
        <p className="justify-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          libero magni et, fugit, aperiam ipsa fugiat dignissimos reprehenderit
          at laboriosam a ex corrupti error placeat aut neque blanditiis velit
          debitis.
        </p>
      </div>
      <MembercardGrid />
    </main>
  );
}

export default Team;
