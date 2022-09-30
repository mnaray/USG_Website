import React from "react";
import Logo from "./components/Logo";
import Slogan from "./components/Slogan";
import Membercard from "./components/Membercard";
import Member from "../logos/USG_Logo_Transparent_PNG.png";

function Team() {
  return (
    <div className="app-header">
      <Logo />
      <Slogan />
      <h1 className="text-pink-600">Unser Team</h1>
      <div className="flex flex-row">
        <Membercard
          mbr={Member}
          name="Nikknez"
          function="Mitglied"
          comment="Er ist toll"
        />
        <Membercard
          mbr={Member}
          name="Pseudonym"
          function="Mitglied"
          comment="Comment"
        />
        <Membercard
          mbr={Member}
          name="Pseudonym"
          function="Mitglied"
          comment="Comment"
        />
        <Membercard
          mbr={Member}
          name="Pseudonym"
          function="Mitglied"
          comment="Comment"
        />
      </div>
    </div>
  );
}

export default Team;
