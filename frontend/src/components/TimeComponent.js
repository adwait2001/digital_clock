import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

//Time Component which displays a table of all lapses

const TimeComponent = () => {
    const [time, setTime] = useState([]);//set time when we fetch using axios
    useEffect(() => {
        Axios.get('/api/time').then(res => {
            const time = res.data;
            setTime(time);
        })
        return () => {
            //
        };
    }, []);

    //convert MiliSeconds to time containing hr ,sec ,min
    const time_conversion=(t)=>{
        const ms=Math.floor(t%100);
        const s=Math.floor((t/100)%60);
        const min=Math.floor((t/6000))%60;
        const hr=Math.floor((t/(6000*60))%24);
        return(hr+":"+min+":"+s+":"+ms)
    }

    return (
        <div>
            <h1 className="centre">Timer History</h1>
            <Link to="/"><span className="centre">Back to clock</span></Link>
            {/* link redirect to clock */}
            <div className="time-list">
            {/* list of time lapses */}
                <table className="table">
                    <thead>
                        <tr>
                            <th>Time in MS</th>
                            <th>Time (hr:min:sec:ms)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {time.map(time => (<tr key={time._id}>
                            <td>{time.timeStamp}</td>
                            <td>{time_conversion(time.timeStamp)}</td>
                        </tr>))}
                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default TimeComponent;
