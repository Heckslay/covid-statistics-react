import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Login from "../components/Login";
import API from "./API";
import Cookies from 'js-cookie';
import Dashboard from "../components/Dashboard";
import CountryStatistics from "../components/CountryStatistics";

function CoRouter() {
    const [status, setStatus] = useState(false);

    const isAuth = () => {
        if (!Cookies.get('token')) {
            setStatus(false);
            return false;
        }

        const result = API.checkToken(Cookies.get('token'));
        result.then((res) => {
            setStatus(res && res.data ? res.data.success : false);
        }).catch((e) => {
            setStatus( false);
        });
    }

    const logOut = () => {
        Cookies.remove('token');
        window.location.reload();
    };


    useEffect(() => {
        isAuth();
    }, [status]);


    return (status ? <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/country-statistics">Country Statistics</Link>
                    </li>
                </ul>
                <a id="logOut" className="nav-link" onClick={() => logOut()}>
                    Log Out
                </a>
            </nav>

            <Routes>
                <Route path="/" element={Dashboard()}/>
                <Route path="/country-statistics" element={CountryStatistics()}/>
            </Routes>
        </Router>
        : <Login setStatus={setStatus}/>)
}

export default CoRouter;
