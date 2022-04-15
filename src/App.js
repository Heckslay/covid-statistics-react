import './App.css';
import CoRouter from "./services/CoRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from "i18next";
import React, {useEffect, useState} from "react";
import Cookies from "js-cookie";
import LangSwitcher from "./components/LangSwitcher";

function App() {
    const [currLang, setCurrLang] = useState('en');
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setCurrLang(lng);
    };

    const logOut = () => {
        Cookies.remove('token');
        window.location.reload();
    };

    return (
        <div className="container">
            <LangSwitcher changeLanguage={changeLanguage}/>
            <CoRouter logOut={logOut} currLang={currLang}/>
        </div>
    );
}

export default App;
