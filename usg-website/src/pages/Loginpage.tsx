import React from 'react';
import Login from './components/Login';
import Logout from './components/Logout';

function Loginpage() {
    let authToken = sessionStorage.getItem("token");
    return (
        <main>
            {authToken ? <Logout /> : <Login />}
        </main>
    );
}

export default Loginpage;