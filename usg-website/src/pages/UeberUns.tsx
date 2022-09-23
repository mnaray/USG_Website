import React from 'react';
import Logo from "./components/Logo";
import Slogan from './components/Slogan';

function UeberUns() {
  return (
    <div className='app-header'>
      <Logo />
      <Slogan />
      <h1 className='text-pink-600'>Über Uns</h1>
    </div>
  )
}

export default UeberUns