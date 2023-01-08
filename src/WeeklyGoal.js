import React from "react";
import './css/weeklygoal.css'


const WeeklyGoal = ({handleChange, handleSubmit, goal}) =>{
    return (
        <div >
            <div className="goal-style" >
                <h1>Weekly Goal</h1>
                <form onSubmit={handleSubmit}>
                    <input className=" goal-input-style"
                        type="number"
                        onChange={handleChange}
                        placeholder="enter goal"
                        
                    />
                    <h1>{`Goal: ${goal}`}</h1>
                </form>
            </div>
        </div>
      );
    }




export default WeeklyGoal