import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoutes() {
    let authToken = sessionStorage.getItem("token");
    return authToken ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes