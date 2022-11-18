import React from "react";
import Title from "./components/Title";
import GoogleForms from "./components/GoogleForms";

function Bewerben() {
  return (
    <main>
      <Title>Bewerben</Title>
      <p className="text-xl text-justify w-1/3 py-8">
        Wenn du Lust hast bei unserem Team mitzuwirken, dann kannst du
        dich gerne mit dem Formular unten bei uns bewerben.
      </p>
      <h1 className="text-2xl pt-5">Bewerbungsformular</h1>
      <GoogleForms url="https://docs.google.com/forms/d/e/1FAIpQLSf28NG92Ewt_RPfbBKdgmjTVSSyHpBZYSuxnhvuKw3XzxNHow/viewform?embedded=true" />
    </main>
  );
}

export default Bewerben
