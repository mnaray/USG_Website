import React from "react";
import Membercard from "./Membercard";
import MemberFoto from "../../logos/USG_Logo_Transparent_PNG.png";

function MembercardGrid() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <Membercard
          mbr={MemberFoto}
          name="Nikknez"
          function="Founder"
          comment="R6-Team"
        />
        <Membercard
          mbr={MemberFoto}
          name="LuschenHaur"
          function="Moderator"
          comment="R6-Team"
        />
        <Membercard
          mbr={MemberFoto}
          name="Evody"
          function="Moderator"
          comment="R6-Team"
        />
        <Membercard
          mbr={MemberFoto}
          name="zGruener"
          function="Mitglied"
          comment="R6-Team"
        />
      </div>
      <div className="flex flex-row">
        <Membercard
          mbr={MemberFoto}
          name="SKY"
          function="Mitglied"
          comment="R6-Team"
        />
        <Membercard
          mbr={MemberFoto}
          name="dissle"
          function="Mitglied"
          comment="R6-Team"
        />
        <Membercard
          mbr={MemberFoto}
          name="SemiColon"
          function="Mitglied"
          comment="R6-Ersatzspieler"
        />
        <Membercard
          mbr={MemberFoto}
          name="MIgel"
          function="Mitglied"
          comment="R6-Ersatzspieler"
        />
      </div>
    </div>
  );
}

export default MembercardGrid;
