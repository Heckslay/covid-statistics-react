import React, {useEffect, useState, useContext} from 'react';
import { useTranslation } from 'react-i18next';

const Card = (props) => {
    const { t, i18n } = useTranslation();
    return <div className="card mt-3 m-lg-3" style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className={`card-title text-center ` + props.class}>{ t(props.title) }</h5>
            <h6 className="card-subtitle mb-2 text-muted text-center ">{ props.count }</h6>
        </div>
    </div>
};

export default Card;
