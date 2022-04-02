import React, { useContext, useEffect, useState } from 'react';
import useMeals from './Custom-hooks/useMeals';
import './Home.css'
import Meal from './Meal/Meal';
import Spinner from './Spinner/Spinner';

const Home = () => {
    const [userValue, setUserValue] = useState('');

    //Custom Hook
    const [meals, setMeals] = useMeals(userValue);

    //Context API 

    const getUserInput = (e) => {
        setUserValue(e.target.value);
    }
    

  

  

    return (
        <div className='container'>
           
            {/* context api */}
            {/* {hi}
            {bye} */}
            <div className="meal-input-container">
            <input type="text" onChange={getUserInput} placeholder="Search Your Recipe" className="meal-input" />
            </div>

            <div className="meals-container">
                <h2 className='meals-found'><small>Showing Recipes : {meals?.length ? meals?.length : <span className="colored">No Results Found</span> }</small> </h2>
               <div className="results-container">

                   {meals.length ? meals?.map(meal => <Meal meal={meal} key={meal.idMeal} />) : <Spinner/>}
                 

                   
               </div>
            
            </div>
        </div>
    );
};

export default Home;