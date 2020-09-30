import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios'
import { Link } from 'react-router-dom';

const App = () => {
  const [milisecondsElapsed, setMiliSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)//BOOLEAN variable to start and stop

  // use effect and set interval to increase time .
  //Very important:
  //remember browser has a minimum accuracy of 10ms so here we consider 10ms to be 1ms
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setMiliSeconds(milisecondsElapsed => milisecondsElapsed + 1);
      }, 10);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);


  //utitlities function to display time
  const getmiliseconds = () => {
    return (milisecondsElapsed % 100)

  }

  const getseconds = () => {
    return Math.floor((milisecondsElapsed / 100));
  }

  const getminutes = () => {
    return Math.floor(getseconds() / 60);
  }

  const gethours = () => {
    return Math.floor(getminutes() / 60);
  }

  const onStart = () => {
    setIsActive(true)
  }

  const onEnd = () => {
    setIsActive(false)
  }

  const onReset = async () => {
    await Axios.post('/api/time', { timeStamp: milisecondsElapsed })//post data to API
    setMiliSeconds(0)
  }

  //displaying clock
  return (
    <div className="background">
      <h1 className="font">DIGI-CLOCK</h1>
      <div className="digital">
        <div className="digiclock"><span className="center">Hr</span><br /><div className='digits'>{gethours() % 24}</div></div>
        <div className="digiclock"><span className="center">Min</span><br /><div className='digits'>{getminutes() % 60}</div></div>
        <div className="digiclock"><span className="center">Sec</span><br /><div className='digits'>{getseconds() % 60}</div></div>
        <div className="digiclock"><span className="center-2">MiliSec</span><br /><div className='digits'>{getmiliseconds()}</div></div>
      </div>
      <div className="button">
        <button onClick={onStart} className="single">START</button>
        <button onClick={onEnd} className="single">STOP</button>
        <button onClick={onReset} className="single">RESET</button>
        <Link to="/time">     
           <button className="single">History</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
