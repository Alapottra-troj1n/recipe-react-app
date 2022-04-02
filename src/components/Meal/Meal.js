import React from 'react';
import { Link } from 'react-router-dom';
import './Meal.css'

const Meal = ({meal}) => {
    return (
        <div className="single-meal"> 
            <div className="img-container">
                <img src={meal.strMealThumb} alt="" />
            </div>
            <div className="meal-details">
                <h2 className="meal-name">{meal.strMeal}</h2>
                <p className="description">{meal.strInstructions.slice(0,120)}...</p>
                <button className="meal-btn"> <Link className="meal-link" to={`/${meal.idMeal}`}>See More</Link> </button>
            </div>
           
        </div>
    );
};

export default Meal;