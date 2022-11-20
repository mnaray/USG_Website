import React, { useEffect, useState } from "react";
import Membercard from "./Membercard";
import MemberFoto from "../../logos/USG_Logo_Transparent_PNG.png";

interface member {
  key: string,
  name: string,
  funktion: string,
  about: string,
  comment: string
}

interface membersArray {
  items: member[],
  count: number
}

function MembercardGrid() {

  const [peopleData, setPeopleData] = useState<member[]>([{
    key: "",
    name: "Loading...",
    funktion: "",
    about: "",
    comment: ""
  }])

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
        function={person.funktion}
        about={person.about}
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
