import React, {useEffect, useState, useContext} from 'react';
import { useTranslation } from 'react-i18next';
import API from "../../services/API";
import DataTable from 'react-data-table-component';

const CountryStatistics = (props) => {
    const { t, i18n } = useTranslation();
    const [initGridData, setInitGridData] = useState([]);
    const [gridData,setGridData] = useState([]);
    const [sQuery, setSQuery] = useState('');

    const columns = [
        { name: 'ID', selector: row => row.id, sortable: true},
        { name: t('code'), selector: row => row.code},
        { name: t('name'), selector: row => row.curr_name},
        { name: t('total_deaths'), selector: row => row.statistics_sum_deaths, sortable: true},
        { name: t('total_confirmed'), selector: row => row.statistics_sum_confirmed, sortable: true},
        { name: t('total_recovered'), selector: row => row.statistics_sum_recovered, sortable: true}
    ];

    const fetchStatistics = () => {
        API.fetchCountryStatistics().then((res) => {
            const procData = setNameLang(res.data);
            setGridData(procData);
            setInitGridData(procData);
        });
    };

    const setNameLang = (data) => {
        data.map((entry,key) => {
            return data[key].curr_name = entry.name[i18n.language]
        });
        return data;
    };

    const search = () => {
        if(sQuery) {
            let tempGridData = [...gridData];
            const fieldList = Object.keys(initGridData[0]);
            tempGridData = tempGridData.filter((item, key) => {
                for (let i = 0; i < fieldList.length; i++) {
                    if (fieldList[i] !== 'name') {
                        if (item[fieldList[i]].toString().toLowerCase().includes(sQuery.toLowerCase())) {
                            return item;
                        }
                    }
                }
            });
            setGridData(tempGridData);
        } else {
            clear();
        }
    }

    const clear = () => {
        setGridData(initGridData);
        setSQuery('');
    };

    useEffect(fetchStatistics, []);
    useEffect(() => {
        const temp = [...gridData];
        const res = setNameLang(temp);
        setGridData(res);
    },[props.currLang]);


    return <div>
        <input type="text" value={sQuery} onChange={(e) => setSQuery(e.target.value)}/>
        <button className="btn btn-primary" onClick={search}>
            Search
        </button>
        <button className="btn btn-danger" onClick={clear}>
            Clear
        </button>
        <DataTable
            columns={columns}
            data={gridData}/></div>

};

export default CountryStatistics;
