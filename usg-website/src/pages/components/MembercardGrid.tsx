import React, { useEffect, useState } from "react";
import Membercard from "./Membercard";
import MemberFoto from "../../logos/USG_Logo_Transparent_PNG.png";

interface member {
  // name: string,
  // funktion: string,
  // about: string,
  // comment: string
  age: number,
  key: string,
  name: string
}

interface membersArray {
  items: member[],
  count: number
}

function MembercardGrid() {

  const [peopleData, setPeopleData] = useState<member[]>([{ age: 0, key: "", name: "Loading . . ." }])

  const getPeopleData = async () => {
    const response = await fetch("https://ejb1h9.deta.dev/db", {
      method: "GET"
    });

    try {
      const responseJson = await response.json();
      setPeopleData(responseJson.items)
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getPeopleData();
  }, [])

  const cardsArray = peopleData.map((person) => {
    return (
      <Membercard
        mbr={MemberFoto}
        name={person.name}
        function="Inhaber, Teamleiter"
        about="Leitet das Team, organisiert Trainings"
        comment="Ingame-Leader / Support / Soft-Breach / Site-Set-Up"
      />
    )
  })

  return (
    <div className="flex flex-row flex-wrap justify-evenly max-w-screen-lg px-3">
      {cardsArray}
    </div>
  );
}

export default MembercardGrid;
