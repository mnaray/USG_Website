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
          function="Inhaber, Teamleiter"
          about="Leitet das Team, organisiert Trainings"
          comment="Ingame-Leader / Support / Soft-Breach / Site-Set-Up"
        />
        <Membercard
          mbr={MemberFoto}
          name="LuschenHaur"
          function="Moderator"
          about="Teamleiter"
          comment="Entry-Frag / Anti-Breach"
        />
        <Membercard
          mbr={MemberFoto}
          name="Evody"
          function="Management, Informatiker, Eventleiter, Ersatzspieler"
          about="Leitet Events, Server und programmiert für das Team."
          comment="Entry-Frag / Hard-Breacher / Traps"
        />
      </div>
      <div className="flex flex-row">
        <Membercard
          mbr={MemberFoto}
          name="dissle"
          function="Teamspieler"
          about="Spielt für das Team als Hauptspieler."
          comment="Hard-Breach-Support / Disruptor / Anti-Intel"
        />
        <Membercard
          mbr={MemberFoto}
          name="Sky"
          function="Teamspieler"
          about="Spielt für das Team als Hauptspieler."
          comment="Support / Intel-Gatherer / Roamer"
        />
        <Membercard
          mbr={MemberFoto}
          name="zGruener"
          function="Teamspieler"
          about="Spielt für das Team als Hauptspieler."
          comment="Support / Intel-Gatherer"
        />
      </div>
      <div className="flex flex-row">
        <Membercard
          mbr={MemberFoto}
          name="MIgel"
          function="Ersatzspieler"
          about="Spielt für das Team als Ersatzspieler."
          comment="Shield / Disruptor"
        />
        <Membercard
          mbr={MemberFoto}
          name="SemiColon"
          function="Ersatzspieler"
          about="Spielt für das Team als Ersatzspieler."
          comment="Angle-Watcher / Site-Set-Up"
        />
        <Membercard
          mbr={MemberFoto}
          name="BroBrot"
          function="Ersatzspieler"
          about="Spielt für das Team als Ersatzspieler."
          comment="Intel / Disruptor"
        />
      </div>
    </div>
  );
}

export default MembercardGrid;
