import React from 'react';
import '../css/App.css';
// import logo from '../logos/USG_Logo_Transparent_PNG.png';
import Logo from './components/Logo';

function PageNotFound() {
    return (
        <div className='App'>
            <header className="App-header">
                <h1 className='Error'>Error 404: Page not found!</h1>
                <p>Bitte eine valide URL eingeben.</p>
                <Logo />
            </header>
        </div>
    );
}

export default PageNotFound;