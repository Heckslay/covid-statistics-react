import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "../components/pages/Login";
import Dashboard from "../components/pages/Dashboard";
import CountryStatistics from "../components/pages/CountryStatistics";
import NavBlock from "../components/NavBlock";
import PrivateRoute from "./PrivateRoute";
import AuthService from "./AuthService";


function CoRouter(props) {
    const [loginStatus, setLoginStatus] = useState(false);

    return <Router>
        {AuthService() || loginStatus ? <NavBlock className="col-12" logOut={props.logOut}/> : ''}
        <Routes>
            <Route path='/' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
            <Route path='/country-statistics'
                   element={<PrivateRoute><CountryStatistics currLang={props.currLang}/></PrivateRoute>}/>
            <Route path="/login" element={<Login setStatus={setLoginStatus}/>}/>
        </Routes>
    </Router>
}

export default CoRouter;
