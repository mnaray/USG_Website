import React from 'react';
import GoogleForms from './components/GoogleForms';

function Scrims() {
  return (
    <main>
      <h1 className="text-3xl pb-4">Scrim Us!</h1>
      <p className="text-xl text-justify w-1/3 pb-8 sm:w-3/4">
        Wir sind gerne für Scrims verfügbar! Stelle uns einen Antrag mit
        dem unteren Formular. Wir werden dann auf dich zukommen, um
        genauere Details zu besprechen.
      </p>
      <h1 className="text-3xl pb-4">Was ist ein Scrim?</h1>
      <p className="text-xl text-justify w-1/3 pb-8 sm:w-3/4">
        Ein Scrim ist eine Art kleines Turnier zwischen zwei Teams. Es
        gibt keinen Preis, der einzige Zweck ist das Team zu trainieren
        und neue Strategien zu testen.
      </p>
      <h1 className='text-2xl pt-5'>Scrim Beantragen</h1>
      <GoogleForms url='https://docs.google.com/forms/d/e/1FAIpQLScUOb_E594BYsa4Vt5SzJ98VBiXxk5qnwZLluo0RwCQPRlv_g/viewform?embedded=true' />
    </main>
  );
}

export default Scrims
