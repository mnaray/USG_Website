import React, { useEffect, useState } from "react";
import Membercard from "./Membercard";
import DefaultImage from "../../logos/USG_Logo_Transparent_PNG.png";

interface member {
  key: string,
  name: string,
  funktionIG: string,
  teamrolle: string,
  comment: string
}

interface membersResponse {
  items: member[],
  count: number
}

function MembercardGrid() {

  const [peopleData, setPeopleData] = useState<member[]>([{
    key: "",
    name: "Loading...",
    funktionIG: "",
    teamrolle: "",
    comment: ""
  }])

  const getPeopleData = async () => {
    const response = await fetch("https://api.usginfo.ch/members", {
      method: "GET"
    });

    try {
      const responseJson: membersResponse = await response.json();
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
        mbr={DefaultImage}
        name={person.name}
        funktionIG={person.funktionIG}
        teamrolle={person.teamrolle}
        comment={person.comment}
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
