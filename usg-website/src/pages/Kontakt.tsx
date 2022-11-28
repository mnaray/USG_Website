import React from "react";
import Button from "./components/Button";
import GoogleForms from "./components/GoogleForms";
import Title from "./components/Title";

function Kontakt() {
  return (
    <main>
      <Title>Kontakt</Title>
      <p className="text-xl text-justify w-1/3 py-8 sm:w-3/4">
        Du kannst uns auf verschiedene Arten und Weisen kontaktieren. Um dich
        bei uns zu bewerben, kannst du nach unten scrollen und unser Formular
        ausfüllen. Wenn du gegen uns scrimmen willst, klickst du auf den
        untenstehenden Button "Scrim Us!". Alternativ kannst du uns auch auf
        Social-Media erreichen.
      </p>
      <div className="flex flex-row justify-evenly min-w-fit py-12">
        <Button text="Bewirb Dich!" destination="bewerben" />
        <p className="text-2xl px-3">oder</p>
        <Button text="Scrim Us!" destination="scrim-us" />
      </div>
      <h1 className="text-2xl pt-5">Kontakformular allgemein</h1>
      <GoogleForms url="https://docs.google.com/forms/d/e/1FAIpQLSes1z9E7D4g9afB-2oP27qLo1iv_mKeahRVAIIiJFQzR-JKmw/viewform?embedded=true" />
    </main>
  );
}

export default Kontakt;
