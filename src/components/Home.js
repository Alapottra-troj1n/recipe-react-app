import React, { useEffect, useState } from 'react';
import './Home.css'
import Meal from './Meal/Meal';

const Home = () => {

    const [userValue, setUserValue] = useState('');
    const [meals, setMeals] = useState([]);

    const getUserInput = (e) => {
        setUserValue(e.target.value);
    }

  

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userValue}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
       

       
        
    },[userValue])

    return (
        <div className='container'>
            <h2 className="app-title">Recipe React App</h2>
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