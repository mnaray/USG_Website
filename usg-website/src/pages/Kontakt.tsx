import React from 'react';
import Logo from "./components/Logo";
import Slogan from './components/Slogan';

function Kontakt() {
  return (
    <div className='app-header'>
      <Logo />
      <Slogan />
      <h1 className='text-pink-600'>Kontakt</h1>
    </div>
  )
}

export default Kontakt