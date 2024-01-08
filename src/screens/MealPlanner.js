// WeekMealPlanner.js
import React, { useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import pdfDocument from '../data/Meal_Planner.pdf'; // Adjust the path accordingly
const mealIdeas = {
  breakfast: [
    'Oatmeal with fruits',
    'Scrambled eggs with toast',
    'Greek yogurt with granola and berries',
    'Avocado toast with poached egg',
    'Smoothie with spinach, banana, and almond milk',
    'Pancakes with maple syrup',
    'Fruit salad',
    'Whole grain cereal with milk',
    'Bagel with cream cheese and smoked salmon',
  ],
  lunch: [
    'Grilled chicken salad',
    'Vegetarian stir-fry',
    'Quinoa bowl with roasted vegetables',
    'Turkey and avocado wrap',
    'Caprese sandwich',
    'Chickpea curry',
    'Pasta with tomato sauce',
    'Caesar salad with grilled shrimp',
  ],
  dinner: [
    'Salmon with lemon dill sauce',
    'Spaghetti Bolognese',
    'Vegetarian lasagna',
    'Teriyaki chicken with broccoli',
    'Mushroom risotto',
    'Tacos with salsa and guacamole',
    'Baked ziti',
    'Grilled steak with mashed potatoes',
  ],
};

const WeekMealPlanner = () => {
  const [mealPlan, setMealPlan] = useState({
    Monday: { breakfast: '', lunch: '', dinner: '' },
    Tuesday: { breakfast: '', lunch: '', dinner: '' },
    Wednesday: { breakfast: '', lunch: '', dinner: '' },
    Thursday: { breakfast: '', lunch: '', dinner: '' },
    Friday: { breakfast: '', lunch: '', dinner: '' },
    Saturday: { breakfast: '', lunch: '', dinner: '' },
    Sunday: { breakfast: '', lunch: '', dinner: '' },
  });

  const clearTable = () => {
    setMealPlan({
      Monday: { breakfast: '', lunch: '', dinner: '' },
      Tuesday: { breakfast: '', lunch: '', dinner: '' },
      Wednesday: { breakfast: '', lunch: '', dinner: '' },
      Thursday: { breakfast: '', lunch: '', dinner: '' },
      Friday: { breakfast: '', lunch: '', dinner: '' },
      Saturday: { breakfast: '', lunch: '', dinner: '' },
      Sunday: { breakfast: '', lunch: '', dinner: '' },
    });
  };

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell>Breakfast</TableCell>
              <TableCell>Lunch</TableCell>
              <TableCell>Dinner</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(mealPlan).map((day) => (
              <TableRow key={day}>
                <TableCell>{day}</TableCell>
                {['breakfast', 'lunch', 'dinner'].map((mealType) => (
                  <TableCell key={`${day}-${mealType}`}>
                    <Autocomplete
                      value={mealPlan[day][mealType]}
                      onChange={(_, newValue) => setMealPlan((prevMealPlan) => ({
                        ...prevMealPlan,
                        [day]: {
                          ...prevMealPlan[day],
                          [mealType]: newValue || '', // Handle clearing the selection
                        },
                      }))}
                      options={mealIdeas[mealType]}
                      freeSolo
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={`Select ${mealType.charAt(0).toUpperCase() + mealType.slice(1)}`}
                        />
                      )}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="outlined" color="primary" onClick={clearTable}>
        Clear Table
      </Button>

      <div style={{ marginTop: '20px' }}>
        <h2>PDF Viewer</h2>
        <embed src={pdfDocument} type="application/pdf" width="100%" height="600px" />
      </div>
    </div>
  );
};

export default WeekMealPlanner;
