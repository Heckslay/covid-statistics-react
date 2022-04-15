import React from 'react';
import {useTranslation} from 'react-i18next';

const LangSwitcher = (props) => {
    const {t} = useTranslation();

    return <div>
        <button className="btn-primary" type="button" onClick={() => props.changeLanguage('en')}>
            En
        </button>
        <button className="btn-danger" type="button" onClick={() => props.changeLanguage('ka')}>
            Ge
        </button>
    </div>
};

export default LangSwitcher;