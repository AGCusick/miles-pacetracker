import React, { useEffect } from "react";
import { useState } from 'react';
import './css/paceCalculator.css';

const PaceCalculator = () => {
    const [paceTime, setPaceTime] = useState({
        hours: (0),
        minutes: (0),
        seconds: (0),
        distance: (0)
    })
    const [secondsPace, setSecondsPace] = useState(0);
    const [runPace, setRunPace] = useState(0);

    const handlePaceChange = (e) => {
        const value = e.target.value;
        setPaceTime({
            ...paceTime,
            [e.target.name]: value
        })
    }

    const calculatePace = () => {
        let minuteFraction = paceTime.seconds / 60

        let getMinutes = ((Number(paceTime.hours) * 60 + Number(paceTime.minutes) + minuteFraction) / Number(paceTime.distance));

        setSecondsPace(((getMinutes - Math.floor(getMinutes)) * 60).toFixed(0))

        setRunPace(Math.floor(getMinutes));


    }

    const handlePaceSubmit = (e) => {
        e.preventDefault();
        calculatePace();
    }


    const handleClick = () => {
        setPaceTime({
            hours: (0),
            minutes: (0),
            seconds: (0),
            distance: (0)
        })
        setRunPace(0);
        setSecondsPace(0);
    }


    return (
        <div className="pace-container">
            <h1>Pace Calculator</h1>
            <h2>Distance</h2>
            <form onSubmit={handlePaceSubmit} >
                <input
                    className="time"
                    type="number"
                    placeholder="enter distance"
                    name="distance"
                    onChange={handlePaceChange}
                    value={paceTime.distance}
                />
            </form>
            <h2>Time: hh/mm/ss</h2>
            <form onSubmit={handlePaceSubmit}>
                <input
                    className="time"
                    type="number"
                    onChange={handlePaceChange}
                    value={paceTime.hours}
                    size="5"
                    placeholder="hh"
                    name="hours"
                />
            </form>
            <form onSubmit={handlePaceSubmit}>
                <input
                    className="time"
                    type="number"
                    onChange={handlePaceChange}
                    value={paceTime.minutes}
                    size="5"
                    placeholder="mm"
                    name="minutes"
                />
            </form>
            <form onSubmit={handlePaceSubmit}>
                <input
                    className="time"
                    type="text"
                    onChange={handlePaceChange}
                    value={paceTime.seconds}
                    size="5"
                    placeholder="ss"
                    name="seconds"
                />
            </form>
            <h2>Pace</h2>
            <h1>{`${Math.floor(runPace)} min ${secondsPace} sec/mile`}</h1>
            <button className="reset-btn" onClick={handleClick}>Reset</button>
        </div>
    )

}

export default PaceCalculator;

