import React, { useState } from 'react';
import './WeekPlanner.css';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Chechbox from '@mui/material/Checkbox';

import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

const WeekPlanner = () => {
  const [days, setDays] = useState([
    { name: 'Sunday', items: [] },
    { name: 'Monday', items: [] },
    { name: 'Tuesday', items: [] },
    { name: 'Wednesday', items: [] },
    { name: 'Thursday', items: [] },
    { name: 'Friday', items: [] },
    { name: 'Saturday', items: [] },
  ]);

  const handleCheckboxChange = (dayIndex, itemIndex) => {
    const updatedDays = [...days];
    updatedDays[dayIndex].items[itemIndex].completed = !updatedDays[dayIndex].items[itemIndex].completed;
    setDays(updatedDays);
  };

  const handleInputChange = (dayIndex, value) => {
    const updatedDays = [...days];
    updatedDays[dayIndex].items.push({ text: value, completed: false });
    setDays(updatedDays);
  };

  return (
    <div className="week-planner">
      {/* <div className='padding' ></div> */}

      <ParticlesBg type="circle" bg={true}/>


        
      {days.map((day, dayIndex) => (
        <div key={dayIndex} >
          <Fade bottom duration={1200}>
          <Card className='day-card'>
            <h2>{day.name}</h2>

            {day.items.map((item, itemIndex) => (

              <div key={itemIndex} className={`item ${item.completed ? 'completed' : ''}`}>
                <Chechbox
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleCheckboxChange(dayIndex, itemIndex)}
                />
                <span>{item.text}</span>
              </div>

            ))}


            <div className="new-item">
              <TextField
                size="small"
                type="text"
                placeholder="Enter item..."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleInputChange(dayIndex, e.target.value);
                    e.target.value = '';
                  }
                }}
              />
            </div>
          </Card>
          </Fade>
        </div>
      ))}
    </div>
  );
};

export default WeekPlanner;
