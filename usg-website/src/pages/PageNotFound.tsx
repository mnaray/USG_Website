import React from 'react';
import Logo from './components/Logo';

function PageNotFound() {
    return (
        <div className='App'>
            <header className="app-header">
                <h1 className='text-red-600'>Error 404: Page not found!</h1>
                <p>Bitte eine valide URL eingeben.</p>
                <Logo />
            </header>
        </div>
    );
}

export default PageNotFound;