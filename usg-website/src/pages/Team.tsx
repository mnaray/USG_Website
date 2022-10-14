import React from 'react';
import Logo from "./components/Logo";
import Slogan from './components/Slogan';

function Team() {
  return (
    <main>
      <Logo />
      <Slogan />
      <h1 className='text-pink-600'>Unser Team</h1>
    </main>
  )
}

export default Team