import React, { useContext, useEffect, useState } from 'react';
import { MealContext } from '../App';
import useMeals from './Custom-hooks/useMeals';
import './Home.css'
import Meal from './Meal/Meal';

const Home = () => {

    const [userValue, setUserValue] = useState('');

    //Custom Hook
    const [meals, setMeals] = useMeals(userValue);

    //Context API 
    const [hi,bye] = useContext(MealContext);

    const getUserInput = (e) => {
        setUserValue(e.target.value);
    }

  

    return (
        <div className='container'>
            <h2 className="app-title">Recipe React App</h2>
            {/* context api */}
            {hi}
            {bye}
            <div className="meal-input-container">
            <input type="text" onChange={getUserInput} placeholder="Search Your Recipe" className="meal-input" />
            </div>

            <div className="meals-container">
                <h2 className='meals-found'><small>Showing Recipes : {meals?.length ? meals?.length : 0}</small> </h2>
               <div className="results-container">
                   {meals.map(meal => <Meal meal={meal} /> )}
               </div>
            </div>
        </div>
    );
};

export default Home;