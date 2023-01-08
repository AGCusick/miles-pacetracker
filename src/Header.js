import React from "react";
import './css/header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [burger, setBurger] = useState(true)
    const handleToggle = () => {
        { burger ? setBurger(false) : setBurger(true) }
    }
    return (
        <div className="header-style">
            <h1 className="header-title">3-2run</h1>
            <button className="burger-btn" onClick={handleToggle}>
                <p></p>
                <p></p>
                <p></p>
            </button>
            <div className={burger === false ? "menu-container" : "hide-menu-container"}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/WeeklyGoal">Track your miles</Link></li>
                    <li><Link to="/Weather">Weather</Link></li>
                    <li><Link to="/Pace">Pace Calculator</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;