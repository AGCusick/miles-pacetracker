import React from "react";
import './css/milesform.css'
import { useState, useMemo, useEffect } from 'react';


const getMondayMiles = JSON.parse(localStorage.getItem('monday') || '[]');
const getTuesdayMiles = JSON.parse(localStorage.getItem('tuesday') || '[]');
const getWednesdayMiles = JSON.parse(localStorage.getItem('wednesday') || '[]');
const getThursdayMiles = JSON.parse(localStorage.getItem('thursday') || '[]');
const getFridayMiles = JSON.parse(localStorage.getItem('friday') || '[]');
const getSaturdayMiles = JSON.parse(localStorage.getItem('saturday') || '[]');
const getSundayMiles = JSON.parse(localStorage.getItem('sunday') || '[]');
const getTotalMiles = JSON.parse(localStorage.getItem('total miles') || '[]');


const MilesForm = ({ goal, milesToGo, setMilesToGo }) => {

    const [totalMiles, setTotalMiles] = useState(getTotalMiles);

    const [miles, setMiles] = useState({
        monday: [getMondayMiles],
        tuesday: [getTuesdayMiles],
        wednesday: [getWednesdayMiles],
        thursday: [getThursdayMiles],
        friday: [getFridayMiles],
        saturday: [getSaturdayMiles],
        sunday: [getSundayMiles]
    });

    const handleChange = (e) => {
        const value = Number(e.target.value);

        setMiles({
            ...miles,
            [e.target.name]: value
        })

        localStorage.setItem(e.target.name, value)

    }

    useEffect(() => {
        let addMiles = Number(miles.monday) + Number(miles.tuesday) + Number(miles.wednesday) + Number(miles.thursday) + Number(miles.friday) + Number(miles.saturday) + Number(miles.sunday)
        setTotalMiles(addMiles);
        setMilesToGo(Number(goal) - addMiles)
    }, [miles])


    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('total miles', totalMiles)

    }

    const resetMiles = () => {
        localStorage.clear();
        window.location.reload();
    }

    const UnderGoal = () => {
        return (
            <div>
                <h1>{`Miles To Go: ${milesToGo}`}</h1>
            </div>
        )
    }

    const GoalAchieved = () => {
        return (
            <div>
                <h1 className="goal-achieved">{`Goal Achieved!: ${milesToGo}`}</h1>
            </div>
        )
    }


const GoalYet = () => {
    if (goal > totalMiles) {
        return (
            <UnderGoal />
        )
    } else {
        return (
            <GoalAchieved />
        )
    }
}
    return (
        <div className="miles-style">
            <form className="daily-miles" onSubmit={handleSubmit} >
                <label>Monday
                    <input className="input-style"
                        type="number"
                        name="monday"
                        placeholder="enter/edit miles"
                        onChange={handleChange}
                    />
                </label>
                <h2>{miles.monday}</h2>
            </form>
            <form className="daily-miles" onSubmit={handleSubmit} >
                <label>Tuesday
                    <input className="input-style"
                        type="number"
                        name="tuesday"
                        placeholder="enter/edit miles"
                        onChange={handleChange}
                    />
                </label>
                <h2>{miles.tuesday}</h2>
            </form>
            <form className="daily-miles" onSubmit={handleSubmit} >
                <label>Wednesday
                    <input className="input-style"
                        type="number"
                        name="wednesday"
                        placeholder="enter/edit miles"
                        onChange={handleChange}
                    />
                </label>
                <h2>{miles.wednesday}</h2>
            </form>
            <form className="daily-miles" onSubmit={handleSubmit} >
                <label>Thursday
                    <input className="input-style"
                        type="number"
                        name="thursday"
                        placeholder="enter/edit miles"
                        onChange={handleChange}
                    />
                </label>
                <h2>{miles.thursday}</h2>
            </form>
            <form className="daily-miles" onSubmit={handleSubmit} >
                <label>Friday
                    <input className="input-style"
                        type="number"
                        name="friday"
                        placeholder="enter/edit miles"
                        onChange={handleChange}
                    />
                </label>
                <h2>{miles.friday}</h2>
            </form>
            <form className="daily-miles" onSubmit={handleSubmit} >
                <label>Saturday
                    <input className="input-style"
                        type="number"
                        name="saturday"
                        placeholder="enter/edit miles"
                        onChange={handleChange}
                    />
                </label>
                <h2>{miles.saturday}</h2>
            </form>
            <form className="daily-miles" onSubmit={handleSubmit} >
                <label>Sunday
                    <input className="input-style"
                        type="number"
                        name="sunday"
                        placeholder="enter/edit miles"
                        onChange={handleChange}
                    />
                </label>
                <h2>{miles.sunday}</h2>
            </form>
            <div className="progress-output">
                <h1>{`Miles Ran: ${totalMiles}`}</h1>
                <GoalYet />
                <button className="reset-miles" onClick={resetMiles}>Reset</button>
            </div>

        </div>
    )
}


export default MilesForm;