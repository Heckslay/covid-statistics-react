import React, {useEffect, useState} from 'react';
import API from "../../services/API";
import Card from "../Card";

const Dashboard = (props) => {
    const [statistics, setStatistics] = useState({});
    const fetchStatistics = () => {
      API.fetchSummary().then((res) => {
          setStatistics(res.data);
      });
    };
    useEffect(fetchStatistics, [])

    return <div style={{display: "inline-flex"}}>
        {Object.keys(statistics).map((title) => {
            return <Card key={title}
                         title={title}
                         count={statistics[title]}
                         class="text-danger"/>
        })}
    </div>;
};

export default Dashboard;
