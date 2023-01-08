import React from 'react';
import './css/home.css';
import { Link } from 'react-router-dom'

const Home = () => {

    return (


        <div className='home-container'>
            <Link to="./WeeklyGoal">
                <div className='track-miles-link'>
                    <h2>Track Your Miles</h2>
                </div></Link>

            <div className='get-weather'>
                <Link to="./Weather">
                    <h2>Check Weather</h2>
                </Link>
            </div>


            <div className='get-pace'>
                <Link to="./Pace"><h2>Pace Calculator</h2></Link>
            </div>

        </div >
    )
}


export default Home;