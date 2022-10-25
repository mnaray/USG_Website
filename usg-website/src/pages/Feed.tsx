import React from 'react';
import Logo from "./components/Logo";
import Slogan from './components/Slogan';

function Feed() {
  return (
    <main>
      <Logo />
      <Slogan />
      <h1 className='text-pink-600'>Feed</h1>
    </main>
  )
}

export default Feed