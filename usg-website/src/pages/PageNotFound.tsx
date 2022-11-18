import React from 'react';
import Logo from './components/Logo';

function PageNotFound() {
    return (
        <main>
            <h1 className='text-red-600 text-4xl'>Error 404: Page not found!</h1>
            <p className='p-6 text-xl'>Bitte eine valide URL eingeben.</p>
            <Logo />
        </main>
    );
}

export default PageNotFound;