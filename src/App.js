import React, { useEffect } from "react";
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Header from './Header';
import MilesForm from "./MilesForm";
import Weather from './Weather';
import PaceCalculator from "./PaceCalculator";
import WeeklyGoal from "./WeeklyGoal";
import Home from "./Home";

const getGoal = JSON.parse(localStorage.getItem('goal') || "[]");

const App = () => {
  const [goal, setGoal] = useState(getGoal);
  const [milesToGo, setMilesToGo] = useState();

  const handleChange = (e) => {
      setGoal(e.target.value)
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      setMilesToGo(goal)
      localStorage.setItem('goal', goal)
      window.location.reload();
      
  }

  return (
    
    <BrowserRouter basename="/miles-pacetracker">
      <div>
         
      <Header/>
        <Routes>
          
          <Route path="/" element={<Home />} /> 
          {/* <Route  path="Home" element={<Home />} /> */}
          <Route  path="/WeeklyGoal" element={[ 
          <WeeklyGoal handleChange={handleChange} handleSubmit={handleSubmit} goal={goal} />,            
          <MilesForm goal={goal} milesToGo={milesToGo} setMilesToGo={setMilesToGo}  path="/MilesForm" />
]} />
            <Route path="/Weather" element={<Weather />} />
            <Route path="/Pace" element={<PaceCalculator />} />
        </Routes>        
      </div>
    </BrowserRouter>

  );
};

export default App;
