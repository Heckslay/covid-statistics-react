import React from 'react';
import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";

const NavBlock = (props) => {
    const {t} = useTranslation();

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">{t('dashboard')}</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/country-statistics">{t('country_statistics')}</Link>
            </li>
        </ul>
        <a id="logOut" className="nav-link" onClick={() => props.logOut()}>
            {t('logout')}
        </a>
    </nav>
};

export default NavBlock;
