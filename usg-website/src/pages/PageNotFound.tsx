import React from 'react';
import Logo from './components/Logo';

function PageNotFound() {
    return (
        <main>
            <h1 className='text-red-600'>Error 404: Page not found!</h1>
            <p>Bitte eine valide URL eingeben.</p>
            <Logo />
        </main>
    );
}

export default PageNotFound;