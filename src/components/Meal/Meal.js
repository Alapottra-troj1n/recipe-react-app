import React from 'react';
import './Meal.css'

const Meal = ({meal}) => {
    return (
        <div className="single-meal"> 
            <div className="img-container">
                <img src={meal.strMealThumb} alt="" />
            </div>
            <div className="details">
                <h2 className="meal-name">{meal.strMeal}</h2>
                <p className="description">{meal.strInstructions.slice(0,120)}...</p>
            </div>
           
        </div>
    );
};

export default Meal;