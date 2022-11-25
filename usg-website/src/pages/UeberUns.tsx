import React, { useState, useEffect } from "react";
import Button from "./components/Button";

function UeberUns() {
  const [count, setCount] = useState<number | string>("...");

  const getCount = async () => {
    const response = await fetch("https://api.usginfo.ch/members", {
      method: "GET",
    });
    try {
      const responseJson = await response.json();
      setCount(responseJson.count);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCount();
  }, []);

  return (
    <main>
      <div className="flex flex-col items-center w-1/3">
        <p className="justify-center text-5xl m-5">Über Uns</p>
        <p className="py-5 justify-center text-center text-lg">
          Wir sind ein neues Schweizer E-Sport-Team, welches Rainbow Six Siege
          spielt. Wir suchen gerade aktiv nach Mitgliedern. Also falls ihr
          Interesse an einem Anfang in der E-Sportszene habt, seid ihr hier
          richtig. Wir bieten Freundlichkeit, keinen Druck, eine Mitgliedschaft
          bei unserem ESports-Team. Wir haben keine Ranganforderung, somit kann
          jeder von jedem lernen und man kann zusammen Spass haben. Bei uns
          bieten wir Teamfähigkeit und Mut, wir bieten Fairness und Skill.
          Gesucht sind Leute wie du!
        </p>
        <p className="py-3 justify-center text-center text-lg">
          Das Team besteht derzeit aus {count} Personen. Wir suchen noch
          Personen aus dem schweizerdeutschen Sprachraum.
        </p>
        <div className="flex flex-column">
          <Button text="Bewirb Dich!" destination="../../../kontakt/bewerben" />
          <p className="text-2xl px-2">oder</p>
          <Button text="Scrim Us!" destination="../../../kontakt/scrim-us" />
        </div>
      </div>
    </main>
  );
}
export default UeberUns;
