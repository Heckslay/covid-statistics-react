import React from 'react'
import { Navigate } from 'react-router-dom'
import AuthService from "./AuthService";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = AuthService();

    return isLoggedIn ? children: <Navigate to="/login" />;
}

export default PrivateRoute;