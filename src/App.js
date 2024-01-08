// App.js
import React from 'react';
import Box from '@mui/material/Box';

// import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import WeekPlanner from './screens/WeekPlanner';
import MealPlanner from './screens/MealPlanner';
import './App.css';

function App() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <header className="Header">Weekly Planner</header>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', fontWeight: 'bold' }}>
          <TabList onChange={handleChange}         
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="lab API tabs example"
          >
            <Tab label="University" value="1" />
            <Tab label="Meals" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"> <WeekPlanner/> </TabPanel>
        <TabPanel value="2"> <MealPlanner/> </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </div>
  );
}

export default App;
